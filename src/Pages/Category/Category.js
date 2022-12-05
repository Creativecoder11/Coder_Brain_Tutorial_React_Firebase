import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h2>category</h2>
            {
                courseCategory.map(course => <CourseDetails
                key={course.id}
                course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Category;