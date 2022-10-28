import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaDownload, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseSummaryCard.css'
import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();
const CourseSummaryCard = () => {
    const details = useLoaderData();
    console.log(details)
    const { name, img, title, desciption, rating } = details
    return (
        <Card className=' main shadow'>
            <Card.Header className="text-center text-white" style={{ backgroundColor: '#212529' }}><p className='text-primary fs-4'>{name}</p>
                <div className='d-flex justify-content-between'>
                    <Card.Title>{title}</Card.Title>
                    <ReactToPdf className='border-none' targetRef={ref}>
                        {({ toPdf }) => (
                            <button className='border-0 ps-4' onClick={toPdf}><FaDownload className='me-4 fs-4'></FaDownload></button>
                        )}
                    </ReactToPdf >

                </div>
            </Card.Header>
            <Card.Body ref={ref}>
                <Card.Img variant="top" src={img} />
                <Card.Text>
                    <>Description : {
                        desciption
                    }</>
                </Card.Text>
                <div className='d-flex justify-content-between mt-2 '>
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
                    < Link to='/course'> <Button variant="outline-primary border-0" className=' fw-bold' >Back to Course</Button></Link>
                </div>
            </Card.Body>

        </Card>
    );
};

export default CourseSummaryCard;