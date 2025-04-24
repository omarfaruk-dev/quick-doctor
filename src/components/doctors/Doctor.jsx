import React from 'react';
import { Link } from 'react-router';

const Doctor = ({ doctor }) => {
    const { image, name, availability, speciality, license, experience } = doctor || {}

    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const isAvailable = availability.includes(today);

    return (
        <div className='bg-white rounded-2xl p-5 md:p-6  gap-4 md:gap-6 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1'>
            <div>
                <img className='w-2/3 mx-auto rounded-2xl border-2 border-[#176AE5]' src={image} alt="" />
            </div>
            <div className='space-y-2'>
                <div className='flex gap-2 flex-wrap items-center mt-5'>
                    <button className={`px-3 py-1 rounded-4xl ${isAvailable ? 'bg-[#09982F1A] text-[#09982F]' : 'bg-[#FFA00020] text-[#FFA000]'} `}>{isAvailable ? 'Available' : 'Unavailable'}</button>
                    <button className='bg-[#176AE51A] text-[#176AE5] px-3 py-1 rounded-4xl'>{experience}+ Years of experience</button>
                </div>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <hr className='border-t-2 border-gray-300 border-dashed'/>
                <p className='text-lg text-[#0F0F0F99]'>{speciality}</p>
                <p className='text-[#0F0F0FB3] flex items-center gap-2'><span className='text-xl'>®</span> {license}</p>
                <Link to={`doctor-details/${license}`}><button className='cursor-pointer text-[#176AE5] border-2 border-[#176AE5] hover:bg-[#176AE5] hover:text-white transition-all py-2 w-full rounded-4xl'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Doctor;