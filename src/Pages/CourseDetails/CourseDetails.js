import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

import './CourseDetails.css'
import { Button } from 'react-bootstrap';


const CourseDetails = ({course}) => {
    const {title, price, image_url, id, details, author, hours} = course;

    return (
        <div  >
            <Card className='card-container' >
                <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title className='fw-semibold'>{title}</Card.Title>
                        <Card.Text>
                        {details.slice(0,100) + '...'}

                        </Card.Text>    
                        <div className="d-flex justify-content-between">
                            <div>
                                <Image src={author.img} width='40px' height='40px' roundedCircle />
                                <span className='ms-2'>{author.name}</span>
                            </div>
                            <div className='mt-1'>
                                <span className='hours'>{hours}</span>
                            </div>                                                                             
                        </div>
                        <div className="d-flex mt-3 justify-content-between">
                            <div>
                                <Link to={`/course-details/${id}`}>
                                    <Button variant="primary">Enroll Now</Button>
                                </Link>
                            </div>
                            <div>
                                <p className='fs-3 fw-bold mb-0 '>{price}$</p>
                            </div>
                        </div>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;