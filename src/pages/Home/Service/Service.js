import React from 'react';
import './Service.css';
import './Service.css'

const Service = (props) => {
    const { name, id, description, img } = props.service
    return (
        <div className="col-xm-12 col-sm-12 col-md-6 col-lg-3 details-cart cart-details p-5 ">
            <img className="img-fluid" src={img} alt="Doctors couldn't found" />
            <div className="mt-3">
                <h5 className="cart-title">{name} </h5>
                <small className="description">{description} </small>
            </div>
            <button className="py-1 mt-4 btn-dtails">Appointment</button>
        </div>
    );
};

export default Service;