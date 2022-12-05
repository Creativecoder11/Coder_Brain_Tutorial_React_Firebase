import React from 'react';
import './Home.css'
import BgLogo from '../../Assets/bg-image.png'
import { Button, Image } from 'react-bootstrap';
import { FaGraduationCap, FaUserGraduate, FaYoutubeSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Home = () => {

    return (
        <div className='home-container'>
            <div className='d-flex mb-3 row w-100 ' >
                <div className='col-md-6 ps-5 mt-5'>
                    <h1 className='fw-semibold' style={{fontSize:'50px'}}>Learn New Skills</h1>
                    <h2 className='fw-semibold' style={{fontSize:'50px'}}>Online With Top</h2>
                    <h2 className='fw-bold text-decoration' style={{fontSize:'80px'}}>CODER BRAIN</h2>

                    <p>Build Skills With Courses, Certificates, And Degrees Online From World-Class Universities And Companies.</p>
                    <Link to="/courses" className="btn-explore">
                        Explore Courses
                    </Link>
                    <div className='d-flex mt-4'>
                        <div>
                            <p><FaGraduationCap/>  Over 10k students</p>
                            <p><FaYoutubeSquare/>  More than 60 courses</p>
                        </div>
                        <div>
                            <p><FaUserGraduate/>  Over 12 million students</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-6 p-0'>
                    <Image src={BgLogo} className='img-fluid p-0'></Image>
                </div>
            </div>
        </div>
    );
};

export default Home;