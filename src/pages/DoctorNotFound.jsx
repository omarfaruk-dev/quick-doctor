import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router';

const DoctorNotFound = ({doctorLicense}) => {
    return (
        <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-yellow-500">No Lawyer Found!!!</h1>
        <p className="mt-4 text-lg text-gray-700">
            No Doctor Found With This License No -</p>
        <div className='text-xl flex items-center justify-center gap-2'> <span className='text-2xl'>®</span> {doctorLicense}</div> <br />
        <Link to='/'><Button label={'View All Lawyers'} /></Link>
    </div>
    );
};

export default DoctorNotFound;