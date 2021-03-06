import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import googleIcon from '../../../images/icon/google.png'
import facebookIcon from '../../../images/icon/facebook.png'
import githubIcon from '../../../images/icon/github.png'
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    
    const handlerGoogleLogin = () => {
        singInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="container row" >

            {/* className="col-12 col-sm-12 col-md-12 col-lg-12 login-form p-5" */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 login-form p-5 ">
                <div className=" mx-5 p-5 form-details">
                    <h2 className="mb-4">Log-In </h2>
                    <form onSubmit="">
                        <small className="email-input"><HiOutlineMailOpen /> Email or mobile phone number</small> <br />
                        <input className="input-feild" type="email" name="email" id="" placeholder="your email" />
                        <br /> <br />
                        <small className="email-input"><RiLockPasswordLine /> Password</small> <br />
                        <input className="input-feild" type="password" placeholder="your password" />
                        <br /> <br />
                        <input className="input-feild bg-primary" type="submit" value="LogIn" /> <br />
                    </form>
                    <div className="authentiaction-form">
                        <p>New to Central Hospital?</p> <br />
                        <Link to="/register">Create Your Account</Link> <br /> <br />
                    </div>
                    {/* Form Part End */}
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12  p-5  ">
                <small className="icon-heading"><FcBusinessman /> Make Your Login Esaier With Us.<FcBusinessman /></small>
                <div className="login-details ">
                    <div className="icon me-5 ">
                        <img onClick={handlerGoogleLogin} src={googleIcon} alt="" />
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