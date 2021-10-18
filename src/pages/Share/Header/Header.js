import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { GiHospital } from "react-icons/gi";
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="#" variant="primary" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><GiHospital className="me-2" /> Central Hospital</Navbar.Brand>
                    <Nav className="ms-auto nav-link">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#servics">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#home">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;