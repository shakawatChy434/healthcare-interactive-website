// import React from 'react';
import { FaBookReader } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import './Register.css'
import googleIcon from '../../../images/icon/google.png'
import facebookIcon from '../../../images/icon/facebook.png'
import githubIcon from '../../../images/icon/google.png'

import React from 'react';


const Register = () => {
    const { singInUsingGoogle } = useAuth()
    return (
        <div className="container">
            <div className="login-form">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 details-cart p-5  ">
                    <h3>Create Account</h3>
                    <form onSubmit="">
                        <small className="email-input"><FaBookReader/> Your name</small> <br />
                        <input className="input-feild" type="text" placeholder="Your name" /> <br /> <br />
                        <small className="email-input"><HiOutlineMailOpen /> Mobile number or email</small> <br />
                        <input className="input-feild" type="email" name="" id="" placeholder="Your email or phone number" /> <br /><br />
                        <small className="email-input"><RiLockPasswordLine /> Password</small> <br />
                        <input className="input-feild" type="password" name="" id="" placeholder="password" /> <br /> <br />
                        <small className="email-input"><RiLockPasswordLine /> Re-enter password</small> <br />
                        <input className="input-feild" type="password" name="" id="" placeholder="Re-enter your password " /> <br /><br />
                        <input className="input-feild" type="submit" value="Continue" />
                    </form>
                    <div className="auth-form">
                        <small> Already have an account? </small> <Link to="/login">Loge-In</Link> <br /> <br />
                    </div>
                </div> <br />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12  p-5  ">
                <small className="icon-heading"><FcBusinessman /> Make Your Login Esaier With Us. <FcBusinessman /> </small>
                <div className="login-details ">
                    <div className="icon me-5 ">
                        <img onClick={singInUsingGoogle} src={googleIcon} alt="" />
                    </div>
                    <div className="icon me-5 ">
                        <img src={facebookIcon} alt="" />
                    </div>
                    <div className="icon me-5 ">
                        <img src={githubIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

/* const Register = () => {
    const { singInUsingGoogle } = useAuth();
    return (

    );
};

export default Register; */