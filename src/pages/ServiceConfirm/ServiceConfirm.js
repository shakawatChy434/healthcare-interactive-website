import React from 'react';
import { useParams } from 'react-router';

const ServiceConfirm = () => {
    const { confirmID } = useParams()
    return (
        <div>
            <h2>Confirm Service{confirmID} </h2>
        </div>
    );
};

export default ServiceConfirm;