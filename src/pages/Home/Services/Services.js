
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { BiRadioCircleMarked } from 'react-icons/bi';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./ourServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div id="servics" className="container">
            <h2 className="text-primary headding"><BiRadioCircleMarked></BiRadioCircleMarked>OUR SERVICES<BiRadioCircleMarked></BiRadioCircleMarked></h2>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;