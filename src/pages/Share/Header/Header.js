import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { GiHospital } from "react-icons/gi";
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><GiHospital className="me-2" /> Central Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto nav-link">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#servics">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;