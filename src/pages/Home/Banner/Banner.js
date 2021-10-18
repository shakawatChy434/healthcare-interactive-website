import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import slider1 from '../../../images/banner/banner-1.jpg'
import slider2 from '../../../images/banner/banner-2.jpg'
import slider3 from '../../../images/banner/banner-3.jpg'
import slider4 from '../../../images/banner/banner-4.jpg'
import slider5 from '../../../images/banner/banner-5.jpg'
import slider6 from '../../../images/banner/banner-6.jpg'

const Banner = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item className="img-details">
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="img-details">
                    <img
                        className="d-block w-100"
                        src={slider6}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    );
};

export default Banner;