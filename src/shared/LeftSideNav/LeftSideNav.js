import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [coursCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCourseCategories(data))
    }, [])
    return (
        <div>
            <h2 className='category-length mb-3'>All Courses: {coursCategories.length}</h2>
            {
                coursCategories.map(courseCategory => <ListGroup
                    className='list-group'
                    key={courseCategory.id}>
                     <ListGroup.Item className='shadow bg-body rounded mb-2 course-link'><Link to={`/category/${courseCategory.id}`} className='text-decoration-none' >{courseCategory.name}</Link></ListGroup.Item>
                </ListGroup>)
                    
            }
        </div>
    );
};

export default LeftSideNav;
