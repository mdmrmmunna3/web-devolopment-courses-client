import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    return (
        <div>
            <h2>this is details</h2>
        </div>
    );
};

export default CourseDetails;