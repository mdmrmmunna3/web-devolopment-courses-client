import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleLogInSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form.value)
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');

            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })

    }

    return (
        <div className='body'>
            <Form onSubmit={handleLogInSubmit} className='form-field'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' className='field' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control name='password' className='field' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='px-4 ' variant="primary" type="submit">
                    LogIn
                </Button>
                <Form.Text className="text-danger ms-2 fw-semibold">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;