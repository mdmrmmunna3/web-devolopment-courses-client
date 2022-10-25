import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseDetails from '../CourseDetails/CourseDetails';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Utilites = () => {
    return (
        <div>
            <Container>
                    <Row className='container'>
                        <Col lg="4">
                            <LeftSideNav></LeftSideNav>
                        </Col>

                        <Col lg="8">
                            <CourseDetails></CourseDetails>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Utilites;