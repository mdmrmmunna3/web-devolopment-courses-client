import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Some Web Development Qestions!</h1>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h2>1. What is cors?</h2></Accordion.Header>
                    <Accordion.Body>
                        <p><span className='fw-semibold'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.CORS failures result in errors but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.</span> <br />
                            <span className='fw-bold '>Same-origin policy :</span>
                            <span className='fw-semibold'>The same-origin policy is a restrictive cross-origin specification that limits the ability for a website to interact with resources outside of the source domain. The same-origin policy was defined many years ago in response to potentially malicious cross-domain interactions, such as one website stealing private data from another. It generally allows a domain to issue requests to other domains, but not to access the responses.</span>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h2> 2. Why are you using firebase? </h2> </Accordion.Header>
                    <Accordion.Body>
                        <p> <span className='fw-bold'>Why are you using firebase ? :</span> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            <br />
                            <span className='fw-bold'>What other options do you have to implement authentication? :</span> <span className='fw-smibold'>
                                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                                <br />

                                * Single-Factor/Primary Authentication. ... <br />
                                * Two-Factor Authentication (2FA) ... <br />
                                * Single Sign-On (SSO) ... <br />
                                * Multi-Factor Authentication (MFA) ... <br />
                                * Password Authentication Protocol (PAP) ... <br />
                                * Challenge Handshake Authentication Protocol (CHAP) ... <br />
                                * Extensible Authentication Protocol (EAP)


                            </span>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h2> 3. How does the private route work?</h2> </Accordion.Header>
                    <Accordion.Body>
                        <p> React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes. For a quick demonstration, we will build a simple     application with following components:
                            <strong>The</strong> private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h2>4. What is Node? </h2></Accordion.Header>
                    <Accordion.Body>
                        <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. <br />
                            <span className='fw-bold'>How does Node work? :</span>
                            In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js. Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;