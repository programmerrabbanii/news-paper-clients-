import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaNewspaper, FaUserPlus, FaHome } from 'react-icons/fa';

const AdminRoute = () => {
    return (
        <div className="p-4 bg-[#E21C6F] text-white shadow-lg h-screen">
            <h2 className='mb-4 text-2xl font-bold'>News Paper Web Applications</h2>
            <ul className="space-y-2">
                <li>
                    <NavLink 
                        to="/dashboard/Allusers" 
                        className={({ isActive }) => 
                            `group flex items-center gap-3 p-3 border border-gray-600 rounded-lg transition duration-300 ${
                                isActive ? 'bg-gray-900 font-bold' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <FaUsers className="text-xl text-white group-hover:text-white" />
                        <span className="flex-1">All Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dashboard/Articles" 
                        className={({ isActive }) => 
                            `group flex items-center gap-3 p-3 border border-gray-600 rounded-lg transition duration-300 ${
                                isActive ? 'bg-gray-900 font-bold' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <FaNewspaper className="text-xl text-white group-hover:text-white" />
                        <span className="flex-1">All Articles</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dashboard/AddPublisher" 
                        className={({ isActive }) => 
                            `group flex items-center gap-3 p-3 border border-gray-600 rounded-lg transition duration-300 ${
                                isActive ? 'bg-gray-900 font-bold' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <FaUserPlus className="text-xl text-white group-hover:text-white" />
                        <span className="flex-1">Add Publisher</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `group flex items-center gap-3 p-3 border border-gray-600 rounded-lg transition duration-300 ${
                                isActive ? 'bg-gray-900 font-bold' : 'hover:bg-gray-700'
                            }`
                        }
                    >
                        <FaHome className="text-xl text-white group-hover:text-white" />
                        <span className="flex-1">Home</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AdminRoute;
