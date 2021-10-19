import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {

    return (
        <div className="container">
            <div className="row">
                {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12 details-cart p-5 ">
                
                </div> */}

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 details-cart p-2 "> Seacrh : <input className="input-feild px-5 py-4" type="text" placeholder="Search your services" /> <br /> <br />

                    <h4> Emergency Contact No :  <FiPhoneCall ></FiPhoneCall> +018842829880</h4>
                </div>
            </div>
        </div >
    );
};

export default Footer;