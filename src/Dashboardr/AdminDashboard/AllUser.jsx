import React, {  useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const AllUser = () => {
  
  const [loading, setLoading] = useState(true);

  

const { data: users=[], isLoading, isError, error, refetch } = useQuery(
    {
        queryKey:['users'], // Query key
        queryFn: async  () => {
          const response = await axios.get('https://newspaper-server-two.vercel.app/allusers');
          setLoading(false)
          refetch()
          return response.data;
        }
    }
    
  );

  // Handle making a user an admin
  const handleMakeAdmin = async (userId) => {
    try {
      // Make a PUT request to update the user's admin status
      const res = await axios.patch(`https://newspaper-server-two.vercel.app/makeadmin/${userId}`);

       const data=await res.data
       console.log(data);
       if(data.modifiedCount > 0){
        Swal.fire({
            title: "Good job!",
            text: "User Admin Done!",
            icon: "success"
          });
       }
      // If the response is successful, update the user list locally
      if (res.status === 200) {
        setUsers(users.map(user =>
          user.id === userId ? { ...user, isAdmin: true } : user
        ));
      }
    } catch (error) {
      console.error('Error updating admin status:', error);
    }
  };
  
  



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">All Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Profile Picture</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>

            {
                users.length >0 &&
            users?.map(user => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <img src={user?.photo} alt="Profile" className="w-12 h-12 rounded-full" />
                </td>
                <td className="py-2 px-4">
                  {user.adminStatues==='admin' ? (
                    <span className="bg-green-500 text-white py-1 px-3 rounded-full">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-full"
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
