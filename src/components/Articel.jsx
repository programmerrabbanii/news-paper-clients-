import axios from "axios";
import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever, MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";

const Articel = ({ article }) => {
  const approveHandle = async (id) => {
    try {
      const res = await axios.patch(
        `https://newspaper-server-two.vercel.app/approvearticle/${id}`
      );
      const data = await res.data;
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Approve Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await axios.patch(
        `https://newspaper-server-two.vercel.app/rejecetdarticle/${id}`
      );
      const data = await res.data;
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Rejected Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteArticle = async (id) => {
    try {
      const res = await axios.patch(
        `https://newspaper-server-two.vercel.app/deletearticlebyadmin/${id}`
      );
      const data = await res.data;
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const premiumHandle=async(id)=>{
    try {
        const res = await axios.patch(
          `https://newspaper-server-two.vercel.app/premiumarticle/${id}`
        );
        const data = await res.data;
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Premium Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error);
      }

  }


  return (
    <tr>
      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div class="inline-flex items-center gap-x-3">
          <div class="flex items-center gap-x-2">
            <img
              class="object-cover w-10 h-10 rounded-full"
              src={article.image}
              alt=""
            />
            <div>
              <h2 class="font-medium text-gray-800 dark:text-white ">
                {article.userName}
              </h2>
              <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                {article.email}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <h2 class="text-sm font-normal text-emerald-500">{article.title}</h2>
        </div>
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {article.postDate}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {article.apporoveStatus}
      </td>
      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {article.publisher}
      </td>
      <td class="px-4 py-4 text-sm whitespace-nowrap">
        <div class="flex items-center gap-x-6">
          <button
            onClick={() => approveHandle(article._id)}
            class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-green-600 focus:outline-none text-3xl"
          >
            <FaCheck />
          </button>
          <button
            onClick={() => handleReject(article._id)}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-3xl"
          >
            <MdDeleteForever />
          </button>

          <button
            onClick={() => deleteArticle(article._id)}
            class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-red-600 focus:outline-none text-3xl"
          >
            <CiSquareRemove />
          </button>

          <button onClick={()=>premiumHandle(article._id)} class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none text-3xl">
            <MdWorkspacePremium />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Articel;
