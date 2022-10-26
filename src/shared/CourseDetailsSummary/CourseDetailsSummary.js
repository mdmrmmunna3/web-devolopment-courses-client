import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseDetailsSummary.css'

const CourseDetailsSummary = ({ course }) => {
    const { id, name , img, title, desciption} = course
    return (
        <Card className='card-container'>
            <Card.Header className="text-center text-white" style={{backgroundColor: '#212529'}}>{name}</Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{ title}</Card.Title>
                <Card.Text>
                    <>Description : {
                        desciption?.length > 200 ? 
                        <>{desciption.slice(0, 200) + '...'} <Link to={`/courses/${id} `} className='text-decoration-none fw-semibold'>Read More</Link> </>
                        :
                        desciption
                    }</>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CourseDetailsSummary;