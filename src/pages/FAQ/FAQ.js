import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FAQ = () => {
    return (
        <div>
            <h2 style={{color: '#0f3443'}} className='text-center'>FAQ - Frequently Asked Questions</h2>
        <Row xs={1} md={2} className="g-4 mt-4">
            
            <Col>
                <Card style={{backgroundColor: '#0f3443'}}>

                    <Card.Body>
                        <Card.Title className='text-primary'>What is your project management process?</Card.Title>
                        <Card.Text className='text-white'>
                            Our project management process involves everything, right from scratch till delivering the project successfully. We first understand and plan based on the requirements, prioritize the tasks and start the execution with a well-structured process flow.
                            <br />
                            During the execution, we ensure to track and monitor the progress of the project and during the final stage, we ensure to troubleshoot, test and deliver it along with a final report of the project.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{backgroundColor: '#0f3443'}}>

                    <Card.Body>
                        <Card.Title className='text-primary'>Does my site need to be updated to HTTPS instead of HTTP?</Card.Title>
                        <Card.Text className='text-white'>
                        Of course, you shouldn’t compromise on this. It is essential to update your website with HTTPs instead of HTTP as HTTPs is considered to solve data protection issues. Your data will be protected by encrypting it with an SSL certificate.
                  
                            Websites that handle eCommerce, banking transactions, user data should mandatorily be updated to HTTPs in order to protect user data from getting hacked. If your website is not configured with a valid SSL certificate the browser 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{backgroundColor: '#0f3443'}}>

                    <Card.Body>
                        <Card.Title className='text-primary'>Can you help me improve my site without building a new website?</Card.Title>
                        <Card.Text className='text-white'>
                        Through our maintenance service, we can help you in improving the design, features and overall performance of your website without the need for a new one. Our adroit UI UX experts can also help you with suggestions on improving user experience in an existing website hence, we can enhance your existing website without any hassle.If your website is not configured with a valid SSL certificate the browser 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{backgroundColor: '#0f3443'}}>

                    <Card.Body>
                        <Card.Title className='text-primary'>Why are you so expensive?</Card.Title>
                        <Card.Text className='text-white'>
                        The process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money.if we are still waiting for text and images from yourself.


                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
        </div>
    );
};

export default FAQ;