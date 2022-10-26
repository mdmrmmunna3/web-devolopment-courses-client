import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Utilites from '../../shared/Utilites/Utilites';

const Course = () => {
    const course = useLoaderData()
    return (
        <div>
            {
                <Utilites></Utilites>
            }
        </div>
    );
};

export default Course;