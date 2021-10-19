import React from 'react';
import Banner from '../Banner/Banner';
import OurDoctors from '../Doctors/OurDoctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <OurDoctors></OurDoctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;