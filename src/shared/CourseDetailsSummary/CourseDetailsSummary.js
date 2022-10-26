import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CourseDetailsSummary = ({course}) => {
    const {name} = course
    return (
        <div className='bg-primary'>
            {name}
        </div>
    );
};

export default CourseDetailsSummary;