import React, { useState } from 'react';
import Hero from '../components/Hero';
import Success from '../components/Success';
import Doctors from '../components/doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [doctors, setDoctors] = useState(data);



    const handleSearch = (e, text) => {
        e.preventDefault(text);
        const searchedDoctors = data.filter(doctor =>
            doctor?.name?.toLowerCase().includes(text.toLowerCase()) || 
            doctor?.speciality?.toLowerCase().includes(text.toLowerCase())
        )
            setDoctors(searchedDoctors);
    }

    return (
        <div>
            <Hero handleSearch={handleSearch} />
            <Doctors doctors={doctors} />
            <Success />
        </div>
    );
};

export default Home;