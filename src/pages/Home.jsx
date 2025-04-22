import React from 'react';
import Hero from '../components/Hero';
import Success from '../components/Success';
import Doctors from '../components/doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Doctors/>
            <Success/>
        </div>
    );
};

export default Home;