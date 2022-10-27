import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseDetailsSummary.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseDetailsSummary = ({ course }) => {
    const { id, name, img, title, desciption, rating } = course
    return (
        <Card className='card-container shadow'>
            <Card.Header className="text-center text-white" style={{ backgroundColor: '#212529' }}>{name}</Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <>Description : {
                        desciption?.length > 200 ?
                            <>{desciption.slice(0, 200) + '...'} <Link to={`/courses/${id} `} className='text-decoration-none fw-semibold'>Read More</Link> </>
                            :
                            desciption
                    }</>
                </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-between mt-2'>
                <Card.Footer className="border-0 text-dark">
                    <div className='d-flex align-items-center'>
                        <span className='me-2 text-warning'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>
                        </span>
                        <span className='fw-semibold'>{rating.number}</span>
                    </div>
                </Card.Footer>
                <Link to='/login'><Button variant="outline-primary border-0" className=' fw-bold' >Get Enroll</Button></Link>
            </div>
        </Card>
    );
};

export default CourseDetailsSummary;