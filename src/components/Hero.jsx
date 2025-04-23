import React, { useState } from 'react';
import heroImg from '../assets/dr-banner.png';
import Button from './ui/Button';
const Hero = ({ handleSearch }) => {

    const [searchText, setSearchText] = useState('');


    return (
        <div className=' mx-auto p-8 md:p-16 bg-linear-to-b from-[#ffffff0] to-[#ffffff] rounded-xl border-2 border-gray-50'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl md:leading-10 lg:leading-14 font-bold pb-4'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='text-[#0f0f0f]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <form onSubmit={(e) => handleSearch(e,searchText)}
                className='flex flex-col lg:flex-row justify-center gap-5'>
                <div
                    class="flex items-center rounded-3xl bg-white px-3 outline-2 -outline-offset-1 outline-gray-200 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#176AE5]">
                    <input
                        value={searchText}
                        onChange={e=> setSearchText(e.target.value)}
                        type="text" name="search"
                        class="w-lg py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        placeholder="Search Doctor Here..." />

                </div>
                <Button type={'submit'} label={'Search Now'} />
            </form>
            <div className='flex justify-center flex-col gap-5 md:flex-row mt-6'>
                <img className='md:w-2/5' src={heroImg} alt="" />
                <img className='md:w-2/5' src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;