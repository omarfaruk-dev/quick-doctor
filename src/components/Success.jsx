import React from 'react';
import successDoc from '../assets/success-doctor.png'
import successRev from '../assets/success-review.png'
import successPatients from '../assets/success-patients.png'
import successStaffs from '../assets/success-staffs.png'
import CountUp from 'react-countup';

const Success = () => {
    return (
        <div className='mt-20'>
            {/* header part  */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl font-semibold'>We Provide Best Medical Service</h2>
                <p className='text-gray-800'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            {/* card  */}
            <div className='flex gap-8 flex-wrap justify-center items-center mt-6'>
                <div className='py-8 space-y-3 px-20 bg-white rounded-lg hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={successDoc} className='w-20 object-cover' alt="" />
                    <h3 className='text-3xl md:text-4xl font-semibold'><CountUp start={0} end={199} enableScrollSpy={true} duration={5} />+</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Total Doctor</p>
                </div>
                <div className='py-8 space-y-3 px-20 text-center bg-white rounded-lg hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={successRev} className='mx-auto w-20 object-cover' alt="" />
                    <h3 className='text-3xl md:text-4xl font-semibold'><CountUp start={0} end={567} enableScrollSpy={true} duration={5} />+</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Total Reviews</p>
                </div>
                <div className='py-8 space-y-3 px-20 bg-white rounded-lg hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={successPatients} className='w-20 object-cover' alt="" />
                    <h3 className='text-3xl md:text-4xl font-semibold'><CountUp start={0} end={2153} enableScrollSpy={true} duration={5} />+</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Patients</p>
                </div>
                <div className='py-8 space-y-3 px-20 bg-white rounded-lg hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={successStaffs} className='w-20 object-cover' alt="" />
                    <h3 className='text-3xl md:text-4xl font-semibold'><CountUp start={0} end={371} enableScrollSpy={true} duration={5} />+</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Total Stuffs</p>
                </div>

            </div>
        </div>
    );
};

export default Success;