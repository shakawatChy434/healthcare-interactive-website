import React, { useEffect, useState } from 'react';
import { BiRadioCircleMarked } from 'react-icons/bi';
import Doctor from '../Doctor/Doctor';
import './OurDoctors.css'

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        fetch('./ourDoctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div id="doctors" className="container mb-5">
            <h2 className="text-primary headding"><BiRadioCircleMarked></BiRadioCircleMarked>OUR DOCTORS<BiRadioCircleMarked></BiRadioCircleMarked></h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default OurDoctors;