import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import './CourseSummaryCard.css'

const CourseSummaryCard = () => {
    const details = useLoaderData();
    console.log(details)
    const {  name, img, title, desciption, rating } = details
    return (
        <Card className=' main shadow'>
            <Card.Header className="text-center text-white" style={{ backgroundColor: '#212529' }}>{name}</Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <>Description : {
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
                <Button variant="outline-primary border-0" className=' fw-bold' >Get Premimum Access</Button>
            </div>
        </Card>
    );
};

export default CourseSummaryCard;