import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='border-b'>
            <div className='flex justify-between items-center pb-4  w-11/12 mx-auto mt-8'>
            <div className='text-2xl font-bold text-orange-500'>Teeth Wizard</div>
            <div className='space-x-2'>
                <NavLink className="px-2 py-1" to='/'>Home</NavLink>
                <NavLink className="px-2 py-1" to='/all-treatment'>All Treatment</NavLink>
                <NavLink className="px-2 py-1" to='/appointment'>My Appointment</NavLink>
                <NavLink className="px-2 py-1" to='/profile'>Profile</NavLink>
            </div>
            <div>
                <button className='btn btn-sm btn-ghost border-orange-500 text-orange-500'>Login</button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;