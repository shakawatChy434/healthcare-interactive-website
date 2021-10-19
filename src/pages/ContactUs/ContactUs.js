import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div id="contact">
            <h2>This is Contact page</h2>
            <Link to="/home">
                <button className="mt-5 mb-5 px-5 py-2 bg-primary  notFound-btn">
                    <AiOutlineArrowLeft className="me-3 " />
                    Go Back</button>
            </Link>
        </div>
    );
};

export default ContactUs;