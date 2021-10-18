import React from 'react';
import Banner from '../Banner/Banner';
import OurDoctors from '../Doctors/OurDoctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <OurDoctors></OurDoctors>
        </div>
    );
};

export default Home;