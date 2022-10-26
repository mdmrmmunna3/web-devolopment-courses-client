import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseDetails from '../CourseDetails/CourseDetails';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Utilites = () => {
    return (
        <div className='container'>
            <Row className=''>
                <Col lg="3" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>

                <Col lg="9">
                    <CourseDetails></CourseDetails>
                </Col>
            </Row>
        </div>
    );
};

export default Utilites;