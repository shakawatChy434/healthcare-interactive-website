import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaRegSmileWink } from "react-icons/fa";
import googleIcon from '../../../images/icon/google.png'
import facebookIcon from '../../../images/icon/facebook.png'
import githubIcon from '../../../images/icon/github.png'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    return (
        <div className="container row" >

            <div className="col-12 col-sm-12 col-md-12 col-lg-12  p-5 form-details">
                <h2 className="mb-4">Log-In </h2>
                <form onSubmit="">
                    <small className="email-input">Email or mobile phone number</small> <br />
                    <input className="input-feild" type="email" name="email" id="" placeholder="your email" />
                    <br /> <br />
                    <small className="email-input">Password</small> <br />
                    <input className="input-feild" type="password" placeholder="your password" />
                    <br /> <br />
                    <input className="input-feild" type="submit" value="Continue" /> <br />
                </form>
                <div className="authentiaction-form">
                    <p>New to Central Hospital?</p> <br />
                    <Link to="/register">Create Your Account</Link> <br /> <br />

                </div>
            </div>

            {/* Form Part End */}
            {/* Third party login start */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12  p-5 auth-details">
                <small className="icon-heading"><FaRegSmileWink></FaRegSmileWink> Make Your Login Esaier With Us.<FaRegSmileWink></FaRegSmileWink> </small>
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

export default Login;