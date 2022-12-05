import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { FaAngleDoubleRight, FaArrowAltCircleRight, FaDiscourse } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SideNav.css'

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        fetch('https://coder-brain-learning-server.vercel.app/courses')
        .then(res=> res.json())
        .then(data => setCourses(data))
        
    },[])

    return (
        <div>
            <div>
                <Button
                    variant="outline-primary"
                    className="d-md-none"
                    onClick={handleShow}
                    >
                    <FaDiscourse></FaDiscourse>
                </Button>
            </div>
            <div>
                <Offcanvas show={show} onHide={handleClose} responsive="md">
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Courses Categorey</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ListGroup>
                        {
                        courses.map(course => 
                            <Link 
                            className="course-btn my-2 fw-semibold" 
                            key={course.id} 
                            course={course} 
                            to={`/course-details/${course.id}`}
                            >
                                {course.name}<FaAngleDoubleRight className='ms-1'></FaAngleDoubleRight>
                            </Link>
                         )
                        }
                    </ListGroup>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        </div>
    );
};

export default SideNav;