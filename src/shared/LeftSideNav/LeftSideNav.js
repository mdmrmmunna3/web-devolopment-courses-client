import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [coursCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCourseCategories(data))
    }, [])
    return (
        <div>
            <h2>All Courses: {coursCategories.length}</h2>
            {
                coursCategories.map(courseCategory => <p
                    key={courseCategory.id}>
                    <Link to={`courses/${courseCategory.id}`}>{courseCategory.name}</Link>
                </p>)
                    
            }
        </div>
    );
};

export default LeftSideNav;