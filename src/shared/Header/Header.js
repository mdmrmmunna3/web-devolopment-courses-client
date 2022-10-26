import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import DrakMode from '../DrakMode/DrakMode';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand>
                    <Link to='/' className='text-decoration-none text-white d-flex align-items-center'>
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top rounded me-2" /> 
                        <span>WD-Development-Course</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/home' className='text-decoration-none text-white me-2 fw-bold'>Home</NavLink>
                        <NavLink to='/course' className='text-decoration-none text-white me-2 fw-bold'>Courses</NavLink>
                        <NavLink className='text-decoration-none text-white me-2 fw-bold'>FAQ</NavLink>
                        <NavLink className='text-decoration-none text-white me-2 fw-bold'>Blog</NavLink>
                    </Nav>
                    <DrakMode></DrakMode>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;