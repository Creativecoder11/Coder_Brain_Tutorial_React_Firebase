import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../../Shared/SideNav/SideNav';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Courses.css'
const Courses = () => {
    const allCourse =  useLoaderData();
    return (
        <section className="container py-3">
            <h2 className='text-center py-4'>Chose Your Best Course</h2>
            <div className='row'>
                <div className='col-2'>
                    <SideNav></SideNav>
                </div>
                <div className='col-10' >
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                        {
                            allCourse.map(course => <CourseDetails
                            key={course.id}
                            course={course}
                            ></CourseDetails>)
                        }
                    </div>
                        
                </div>
            </div>
        </section>
    );
};

export default Courses;