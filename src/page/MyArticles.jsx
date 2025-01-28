import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const MyArticles = () => {
    const queryClient = useQueryClient();

  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["myArticles"],
    queryFn: async () => {
      const res = await axios.get("https://newspaper-server-two.vercel.app/news");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-blue-500 text-xl font-semibold">Loading articles...</p>
        <span className="loading loading-bars loading-lg"></span>

      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl font-semibold">
          Something went wrong: {error.message}
        </p>
      </div>
    );
  }

  // Delete Article
  const handleDelete = async (id) => {

    Swal.fire({
      title: "Are you absolutely sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
            
          await axios.delete(`https://newspaper-server-two.vercel.app/articles/${id}`);
          queryClient.invalidateQueries({ queryKey: ["myArticles"] });
          Swal.fire("Deleted!", "Your article has been deleted.", "success");
        } catch (err) {
          Swal.fire("Error!", "Failed to delete the article.", "error");
        }
      }
    });
  };

  // Update Article
  const handleUpdate = (id) => {
    Swal.fire({
      title: "Update Article Title",
      input: "text",
      inputPlaceholder: "Enter new title",
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Backend update request
          await axios.put(`https://newspaper-server-two.vercel.app/articles/${id}`, {
            title: result.value,
          });
  
          // Invalidate the cache to refetch updated data
          queryClient.invalidateQueries({ queryKey: ["myArticles"] });
  
          Swal.fire( 
            "Updated!",
            "Your article has been updated successfully.",
            "success"
          );
        } catch (err) {
          Swal.fire("Error!", "Failed to update the article.", "error");
        }
      }
    });
  };
  

  // View Decline Reason
  const handleViewReason = (reason) => {
    Swal.fire({
      title: "Reason for Decline",
      text: reason,
      icon: "info",
      confirmButtonText: "Close",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
        My Articles
      </h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded-lg bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Premium</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article, index) => (
              <tr
                key={article.id}
                className="text-gray-700 hover:bg-gray-100 transition-all"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{article.title}</td>
                <td className="px-4 py-2 border text-center">
                  {article.status === "Approved" ? (
                    <span className="text-green-600 font-semibold">
                      {article.status}
                    </span>
                  ) : article.status === "Declined" ? (
                    <span className="text-red-600 font-semibold">
                      {article.status}
                    </span>
                  ) : (
                    <span className="text-yellow-600 font-semibold">
                      {article.status}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 border text-center">
                  {article.isPremium ? "Yes" : "No"}
                </td>
                <td className="px-4 py-2 border flex items-center justify-center gap-2">
                  <Link to={`/articles/${article._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={() =>
                      
                      Swal.fire(
                        "Details",
                        `Details for article: ${article.title}`,
                        "info"
                      )
                    }
                  >
                    Details
                  </Link>
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    onClick={() => handleUpdate(article._id)}
                  >
                    Update
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(article._id)}
                  >
                    Delete
                  </button>
                  {article.status === "Declined" && (
                    <button
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                      onClick={() => handleViewReason(article.declineReason)}
                    >
                      View Reason
                    </button>
                  )} 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyArticles;
