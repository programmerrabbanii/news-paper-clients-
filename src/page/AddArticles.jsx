import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddArticles = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    publisher: '',
    tags: [],
    description: '', 
  });
  const [publishers, setPublishers] = useState([
    { value: 'publisher1', label: 'Publisher 1' },
    { value: 'publisher2', label: 'Publisher 2' },
  ]);
  const [tagsOptions] = useState([
    { value: 'tech', label: 'Tech' },
    { value: 'business', label: 'Business' },
    { value: 'health', label: 'Health' },
    { value: 'sports', label: 'Sports' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagsChange = (selectedOptions) => {
    setFormData({ ...formData, tags: selectedOptions });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert('Please upload an image');
      return;
    }

    // Upload image to imgbb
    const imgbbApiKey = '2fd4689d6fca765342920d0528a36aff'; 
    const imageData = new FormData();
    imageData.append('image', formData.image);

    try {
      const imageResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        imageData
      );
      const imageUrl = imageResponse.data.data.url;

      // Prepare final data
      const articleData = { 
        title: formData.title, 
        image: imageUrl,
        viewCount: 0,
        publisher: formData.publisher, 
        tags: formData.tags.map((tag) => tag.value), 
        description: formData.description, 
      };

      // Post article data to the backend
      const response = await axios.post('https://newspaper-server-two.vercel.app/news', articleData); // Replace '/api/articles' with your API endpoint
      console.log(response.data);
      Swal.fire({
        position: "top-end", 
        icon: "success",
        title: "Article submitted successfully!",
        showConfirmButton: false,
        timer: 1500
      });

      // Reset form data after successful submission
      setFormData({
        title: '',
        image: null,
        publisher: '',
        tags: [],
        description: '', 
      });

    } catch (error) {
      console.error('Error uploading image or submitting form:', error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error occurred while submitting the form.",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Article</h1>
      <form onSubmit={handleSubmit}>
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

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Publisher</label>
          <select
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Select a Publisher</option>
            {publishers.map((publisher) => (
              <option key={publisher.value} value={publisher.value}>
                {publisher.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Tags</label>
          <Select
            isMulti
            options={tagsOptions}
            value={formData.tags}
            onChange={handleTagsChange}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter article description"
            required
          ></textarea>
        </div>
    

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArticles;
