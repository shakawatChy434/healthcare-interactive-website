import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { GiHospital } from "react-icons/gi";
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><GiHospital className="me-2" /> Central Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto nav-link">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#servics">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                            {user?.email ? (
                                <Nav.Link onClick={logOut} as={HashLink} to="/login">LogOut</Nav.Link>
                            ) : (
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                            )
                            }
                        </Nav>
                        <Navbar.Text>
                            User Name:  <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;