import React from 'react';
import { useContext } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DrakMode from '../DrakMode/DrakMode';

import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

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
                        <span>
                            {user?.uid ?
                                <>

                                    {['bottom'].map((placement) => (
                                        <OverlayTrigger
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${user?.displayName}`}>
                                                    <strong>{user?.displayName}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Image className='me-2' roundedCircle src={user?.photoURL} style={{ height: '30px' }}>
                                            </Image>
                                            
                                        </OverlayTrigger>
                                    ))}
                                    
                                    <Button className='text-white border-0' onClick={logOut} variant='outline-secondary' size='sm' >Log Out</Button>
                                </>
                                :
                                <>
                                    <NavLink to='/login'><Button size='sm' variant="outline-light border-0" className='me-2'>LogIn</Button>
                                    </NavLink>
                                    <NavLink to='/register'>
                                        <Button size='sm' variant="outline-light border-0">Register</Button>
                                    </NavLink>
                                    <Link><FaUser></FaUser> </Link>
                                </>
                            }
                        </span>

                    </Nav>

                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

