import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import Button from '../ui/Button';

const Doctors = ({ doctors }) => {
    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayDoctors(doctors);
        }
        else {
            setDisplayDoctors(doctors.slice(0, 6))
        }

    }, [showAll, doctors])

    return (
        <div className='mt-25 px-5'>
            {/* header part  */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl font-semibold'>Our Best Doctors</h2>
                <p className='text-gray-800 md:w-10/12 mx-auto'>Driven by achieving client success, our 'best' lawyers actively leverage deep legal knowledge and passionate dedication. They champion your unique goals, delivering strategic advocacy and impactful, personalized representation.
                </p>
            </div>
            {/* data  sent to lawyer page */}
            <div className='my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    displayDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                }

            </div>
            <div className='flex justify-center'>
                <Button onClick={() => {
                    setShowAll(!showAll)
                    if (showAll) window.scrollTo(0, 850)
                }} label={showAll ? 'Show Less' : 'View All Doctors'} />

            </div>
        </div>
    );
};

export default Doctors;