import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const AllUser = () => {
  const { data: users = [], isLoading, isError, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get('https://newspaper-server-two.vercel.app/allusers');
      return response.data;
    }
  });

  // Handle making a user an admin
  const handleMakeAdmin = async (userId) => {
    try {
      const res = await axios.patch(`https://newspaper-server-two.vercel.app/makeadmin/${userId}`);
      const data = res.data;

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "User has been made an Admin!",
          icon: "success"
        });
        refetch(); // নতুন ডাটা ফেচ করা
      }
    } catch (error) {
      console.error('Error updating admin status:', error);
    }
  };

  if (isLoading) {
    return <span className=" text-center  loading loading-bars loading-lg">Loading</span>;
  }

  if (isError) {
    return <div className="text-center text-red-500 mt-5">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">All Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Profile Picture</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <img src={user?.photo} alt="Profile" className="w-12 h-12 rounded-full" />
                </td>
                <td className="py-2 px-4">
                  {user.adminStatus === 'admin' ? (
                    <span className="bg-green-500 text-white py-1 px-3 rounded-full">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition"
                    >
                      Make Admin
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

export default AllUser;
