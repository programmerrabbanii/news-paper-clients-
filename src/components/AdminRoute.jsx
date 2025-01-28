import React from 'react';
import { Link } from 'react-router-dom';

const AdminRoute = () => {
    return (
        <div>
            <ul>
                <li className='mb-1 border-2 rounded-md hover:bg-gray-500'>
                    <Link to="/dashboard/Allusers">All Users</Link>
                </li>
                <li className='mb-1 border-2 rounded-md hover:bg-gray-500'>
                    <Link to="/dashboard/Articles"> All Articles</Link>
                </li>
                <li className='mb-1 border-2 rounded-md hover:bg-gray-500'>
                    <Link to="/dashboard/AddPublisher">Add Publisher</Link>
                </li>
                <li className='mb-1 border-2 rounded-md hover:bg-gray-500'>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminRoute;