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

    const { providerLogin, createUser } = useContext(AuthContext);

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

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target.value;
        const name = form?.name?.value;
        const photoURL = form?.photoURL?.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error('error', error))
    }

    return (
        <div className='main-container'>
            <Form onSubmit={handleSubmit} className='form-container'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='text-style' >Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">

                    <Form.Label className='text-style'>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-style'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-style'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>

                <div className='text-center'>
                    <p className='text-white'>OR</p>
                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignUp} className='mb-2' variant="primary"><FaGoogle></FaGoogle> Login With Google</Button>
                        <Button variant="dark"><FaGithub /> Login With Github</Button>
                    </ButtonGroup>
                </div>
                <div className='text-center mt-2'>
                    <Button className='mb-2' variant="primary" type="submit" >
                        Register
                    </Button>
                </div>
                <Form.Text className="text-danger ms-2">

                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;
