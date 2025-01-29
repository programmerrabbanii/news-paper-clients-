import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminRoute from '../components/AdminRoute';

const DashboardLayout = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 ">
                <AdminRoute />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
