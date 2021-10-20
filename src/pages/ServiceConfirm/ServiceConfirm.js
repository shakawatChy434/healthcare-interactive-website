import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceConfirm.css'

const ServiceConfirm = () => {
    const { confirmID } = useParams()
    return (

        <div className="container row ">
            <div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 login-form p-5">
                    <div className=" mx-5 p-5  details-cart">
                        <h2>Kindly Check Your Confirmation.</h2> <br />
                        <h4 className="text-primary text-bold">Service Name :  {confirmID}</h4> <br />
                        <h5>Our Working Days</h5>
                        <p className="bg-primary text-white py-2">(24/7)</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 login-form p-5">
                    <div className=" details-cart p-5">
                        <h3 className="mb-5">Please Complect This Form </h3>
                        <form onSubmit="#">
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
                                Submit</button>
                        </div>
                    </div> <br />
                </div>
                <div>
                </div>
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
        </div >
    );
};

export default ServiceConfirm;