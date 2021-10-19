import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const AppoinmentConfirm = () => {
    const { appoinmentID } = useParams();
    return (
        <div className="container">
            <div className="login-form">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 details-cart p-5  ">
                    <h2>Kindly Check Your Appoinment Details.</h2> <br />
                    <h4 className="text-primary text-bold">Doctor :  {appoinmentID}</h4> <br />
                    <h5>Check Doctors Shedule: </h5>
                    <p>Sunday</p>
                    <p>Monday</p>
                    <p>Thusday</p>
                </div>
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
};

export default AppoinmentConfirm;