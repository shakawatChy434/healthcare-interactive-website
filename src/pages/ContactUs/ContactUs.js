import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container">
            <div className="login-form">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 details-cart p-5  ">
                    <h3>Complect This Form </h3>
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
                        <button className="mt-2  px-5 py-2 bg-primary  notFound-btn">
                            <AiOutlineArrowLeft className="me-3 " />
                            Submit</button>
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


export default ContactUs;