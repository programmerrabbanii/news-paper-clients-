import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddPublisher = () => {
  const [formData, setFormData] = useState({ title: "", image: null });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      Swal.fire("Error!", "Please upload an image", "error");
      return;
    }

    setLoading(true);
    const imgbbApiKey = "2fd4689d6fca765342920d0528a36aff";
    const imageData = new FormData();
    imageData.append("image", formData.image);

    try {
      const imageResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        imageData
      );
      const imageUrl = imageResponse.data.data.url;

      const articleData = { title: formData.title, image: imageUrl };
      const res = await axios.post(`https://newspaper-server-two.vercel.app/publisher`, articleData);

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Publisher Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({ title: "", image: null });
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong!", "error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl border">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Publisher</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            placeholder="Enter title"
            required 
          /> 
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Image</label>
          <div className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer bg-gray-100">
            <FaCloudUploadAlt className="text-2xl text-blue-500" />
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="text-gray-600 cursor-pointer">
              {formData.image ? formData.image.name : "Choose an image"}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full py-3 text-white font-semibold rounded-lg transition-all ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddPublisher;
