import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className=' bg-[#EFEFEF] px-5'>
            <div className='container mx-auto'>
                <Nav />
            </div>
            <div className='container mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;