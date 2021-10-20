import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'
import { MdOutlinePersonAddAlt1 } from "react-icons/md";


const Doctor = (props) => {
    const { name,id, discription, img, } = props.doctor
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 details-cart p-5  ">
            <img className="img-fluid" src={img} alt="Doctors couldn't found" />
            <div className="mt-3">
                <h5 className="cart-title">{name} </h5>
                <small className="description">{discription} </small>

                <Link to={`/appoinmentConfirm/${id}`}>
                    <button className="py-1 mt-4 btn-dtails"> <MdOutlinePersonAddAlt1 /> Appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default Doctor;