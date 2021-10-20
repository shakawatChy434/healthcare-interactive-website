/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai';
import { FaBookReader } from 'react-icons/fa';
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './AppoinmentConfirm.css'

const AppoinmentConfirm = () => {
    const { appoinmentID } = useParams();
    const [doctor, setDoctor] = useState({})

    const { name, discription, img } = doctor;

    useEffect(() => {
        fetch(`/APIdoctor/SingleDoctor${appoinmentID}.json`)
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, [])
    return (
        <div className="container row ">
            <div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 login-form p-5">
                    <div className=" mx-5 p-5  details-cart">
                        <h2>Kindly Check Your Appoinment Details.</h2> <br />
                        <img src={img} alt="" />
                        <h4 className="text-primary text-bold">Doctor :  {name}</h4> <br />
                        <p>{discription} </p>
                        <h5>Check Doctors Shedule: </h5>
                        <p>Sunday</p>
                        <p>Monday</p>
                        <p>Thusday</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 login-form p-5">
                    <div className=" details-cart p-5">
                        <h3 className="mb-5">Please Complect This Form </h3>
                        <form onSubmit="#">
                            <small className="email-input"><FaBookReader /> Your name</small> <br />
                            <input className="input-feild" type="text" placeholder="Your name" /> <br /> <br />
                            <small className="email-input"><HiOutlineMailOpen /> Email Address </small> <br />
                            <input className="input-feild" type="text" placeholder="Your email" /> <br /> <br />
                            <small className="email-input"><HiOutlinePhoneMissedCall /> Mobile number</small> <br />
                            <input className="input-feild" type="text" placeholder="Your name" /> <br /> <br />
                            <small className="email-input"><AiOutlineHome /> Current Adderss </small> <br />
                            <input className="input-feild" type="text" placeholder="Your current address" /> <br /> <br />
                        </form>
                        <div>
                            <button className="mt-5  px-5 py-2 bg-primary  notFound-btn">
                                <AiOutlineArrowLeft className="me-3 " />
                                Confirm</button>
                        </div>
                    </div> <br />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-5  ">
                    <div>
                        <Link to="/home">
                            <button className="mb-5 px-5 py-2 bg-primary notFound-btn">
                                <AiOutlineArrowLeft className="me-3 " />
                                Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};



/*  return (
     <div className="container">
         
             <div className="col-12 col-sm-12 col-md-12 col-lg-4 details-cart p-5   ">
                 <h3>Please Complect This Form </h3>
                 <form onSubmit="">
                     <small className="email-input">Your name</small> <br />
                     <input className="input-feild" type="text" placeholder="Your name" /> <br /> <br />
                     <small className="email-input">Email Address </small> <br />
                     <input className="input-feild" type="text" placeholder="Your email" /> <br /> <br />
                     <small className="email-input">Mobile number</small> <br />
                     <input className="input-feild" type="text" placeholder="Your name" /> <br /> <br />
                     <small className="email-input">Current Adderss </small> <br />
                     <input className="input-feild" type="text" placeholder="Your current address" /> <br /> <br />
                 </form>
                 <div>
                     <button className="mt-5  px-5 py-2 bg-primary  notFound-btn">
                         <AiOutlineArrowLeft className="me-3 " />
                         Confirm</button>
                 </div>
             </div> <br />
             <div></div>
         </div>

         <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-5  ">
             <div>
                 <Link to="/home">
                     <button className="mt-5 mb-5 px-5 py-2 bg-primary  notFound-btn">
                         <AiOutlineArrowLeft className="me-3 " />
                         Go Back</button>
                 </Link>
             </div>
         </div>
         <div className="col-12 col-sm-12 col-md-12 col-lg-12  p-5 ">

         </div>
     </div >
 );
}; */

export default AppoinmentConfirm;