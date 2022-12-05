import React, { useState } from 'react';
import './Header.css'
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
    MdDarkMode
  } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png'
import { AuthContext } from '../../contexts/Auth/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image, NavLink, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const [theme, setTheme] = useState(false);
    const toggle =()=>{
        setTheme(!theme)
    }

    const handleLogOut = ( ) => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <div>
        <Navbar  expand="md" className='navbar' >
            <Container >
                <Navbar.Brand>
                    <div className='d-flex '> 
                        <div>
                            <Image 
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top "
                            />
                        </div>
                        <div>
                            <Link to={'/'} className='fw-bold text-white text-decoration-none ms-3'>Coder Brain</Link>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav className="btn-nav text-white" id="responsive-navbar-nav">
                        
                        <Nav className=''>
                            <NavLink><Link className='text-white ' to={'/home'}>Home</Link></NavLink>
                            <NavLink><Link to={'/courses'}>Courses</Link></NavLink>
                            <NavLink><Link to={'/faq'}>FAQ</Link ></NavLink>
                            <NavLink><Link to={'/blog'}>Blog</Link></NavLink>
                        </Nav>

                        

                        <div className='mt-2'>
                            <Link >
                            {
                                user?.uid?
                                <>
                                <Link className='btn-header bg-light p-2 lg:ms-0 text-dark rounded cursor ms-4' onClick={handleLogOut}>Log Out</Link>
                                </>
                                :
                                <>

                                    <Link className='btn-header bg-light p-2 text-dark rounded cursor ms-4' to={'/login'}>Login</Link>
                                    <Link className='btn-header bg-light p-2 text-dark rounded cursor' to={'/register'}>Register</Link>
                                </>
                            }
                            </Link>
                          
                            <Link>
                        {
                            user?.photoURL ? 
                            <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                            >
                            {({ ref, ...triggerHandler }) => (
                                <Button
                                variant=''
                                {...triggerHandler}
                                className="d-inline-flex align-items-center m-0 p-0"
                                >
                                <Image
                                    style={{height:'30px'}}
                                    ref={ref}
                                    roundedCircle
                                    src={user?.photoURL}
                                />
                                
                                </Button>
                            )}
                            </OverlayTrigger>
                            : <FaUser className='text-light'></FaUser>
                        }
                            </Link>
                        </div>
                        <div className="fs-4" onClick={toggle}>
                            {theme ? <MdDarkMode className="text-dark"></MdDarkMode> : <BsSun className="text-light"></BsSun> }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            
        </div>
    );
};

export default Header;