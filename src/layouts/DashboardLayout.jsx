import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminRoute from '../components/AdminRoute';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[35%] border p-3'>
                <h2 className='mb-2'>News paper web applicatons</h2>
                <AdminRoute></AdminRoute>

            </div>
            <div className='w-[65%] border p-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;