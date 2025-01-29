import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AllArticle = () => {
  const [declineReason, setDeclineReason] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: articles = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axios.get(
        "https://newspaper-server-two.vercel.app/news"
      );
      return res.data;
    },
  });

  const approveArticle = useMutation({
    mutationFn: async (id) => {
      await axios.patch(
        `https://newspaper-server-two.vercel.app/news/${id}/approve`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  const declineArticle = useMutation({
    mutationFn: async ({ id, reason }) => {
      await axios.patch(
        `https://newspaper-server-two.vercel.app/news/${id}/decline`,
        { reason }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  const makePremium = useMutation({
    mutationFn: async (id) => {
      await axios.patch(
        `https://newspaper-server-two.vercel.app/news/${id}/premium`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  if (isLoading)
    return <span className=" text-center  loading loading-bars loading-lg">Loading</span>;

  if (error)
    return <p className="text-center text-red-500">Error loading articles!</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-left mb-6">All Articles</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Title",
                "Author",
                "Email",
                "Photo",
                "Posted Date",
                "Status",
                "Publisher",
                "Actions",
              ].map((header) => (
                <th key={header} className="border p-3 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border hover:bg-gray-50">
                <td className="border p-3">{article.title}</td>
                <td className="border p-3">{article.authorName}</td>
                <td className="border p-3">{article.authorEmail}</td>
                <td className="border p-3">
                  <img
                    src={article.image}
                    alt="Author"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="border p-3">{article.postedDate}</td>
                <td className="border p-3">{article.status}</td>
                <td className="border p-3">{article.publisher}</td>
                <td className="border p-3 flex flex-wrap gap-2">
                  <button
                    className="w-28 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                    onClick={() => approveArticle.mutate(article.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="w-28 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    onClick={() => setSelectedArticle(article)}
                  >
                    Decline
                  </button>
                  <button
                    className="w-28 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                    onClick={() => makePremium.mutate(article.id)}
                  >
                    Make Premium
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-3">
              Decline Article: {selectedArticle.title}
            </h3>
            <textarea
              className="w-full p-2 border rounded mb-3"
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              placeholder="Enter reason for decline"
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
                onClick={() => setSelectedArticle(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                onClick={() => {
                  declineArticle.mutate({
                    id: selectedArticle.id,
                    reason: declineReason,
                  });
                  setSelectedArticle(null);
                  setDeclineReason("");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllArticle;
