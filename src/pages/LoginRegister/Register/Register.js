import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {

    const { providerLogin } = useContext(AuthContext);

    const handleGoogleSignUp = () => {
        const googleProvider = new GoogleAuthProvider();
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error('error', error);
            })
    }

    return (
        <div className='main-container'>
            <Form className='mx-auto w-75 form-container'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='text-style'>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-style' >Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="photo URL" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-style' >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-style' >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <div>
                    <p>OR</p>
                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignUp} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                        <Button variant="outline-dark"><FaGithub /> Login With Github</Button>
                    </ButtonGroup>
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;