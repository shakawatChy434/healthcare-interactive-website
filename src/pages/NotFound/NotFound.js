import React from 'react';
import './NotFound.css'
import nfImg from '../../images/notFound/404.jpg'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={nfImg} alt="" /> <br />
            <Link to="/home">
                <button className="mt-5 mb-5 px-5 py-2 bg-primary  notFound-btn">
                    <AiOutlineArrowLeft className="me-3 " />
                    Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;