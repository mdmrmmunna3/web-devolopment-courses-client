import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsSummary from '../CourseDetailsSummary/CourseDetailsSummary';
import './CourseDetails.css'

const CourseDetails = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            <div className='course-card'>
                {
                    courses.map(course => <CourseDetailsSummary key={course.id} course={course}></CourseDetailsSummary>)
                }
            </div>
        </div>
    );
};

export default CourseDetails;