import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddPubliser = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image");
      return;
    }

    // Upload image to imgbb
    const imgbbApiKey = "2fd4689d6fca765342920d0528a36aff";
    const imageData = new FormData();
    imageData.append("image", formData.image);
    try {
      const imageResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        imageData
      );
      const imageUrl = imageResponse.data.data.url;
      const articleData = { 

        title: formData.title, 
        image: imageUrl
        
      };
      const res=await axios.post(`http://localhost:5000/publisher`, articleData)
      const data=await res.data
      if(data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Publisher Added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Publisher</h1>

      <form onSubmit={handlerSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter article title"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
            required
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddPubliser;
