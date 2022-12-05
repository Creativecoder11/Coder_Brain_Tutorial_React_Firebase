import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css'
import FooterLogo from '../../Assets/Logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div class="footer-container  d-flex justify-content-around ">
                
                <div class=" d-flex text-center justify-content-center pt-2 ">
                    <Image src={FooterLogo} height='20' ></Image>
                    <p className='text-white'>Copyright by Coder Brain © 2022</p>
                </div>
                <div className='mt-2'>
                    <FaFacebook className='text-white fs-4 me-3'></FaFacebook>
                    <FaInstagram  className='text-white fs-4 me-3'></FaInstagram>
                    <FaGithub  className='text-white fs-4 me-3'></FaGithub>
                </div>
            </div>
            
        </div>
        );
    };

export default Footer;