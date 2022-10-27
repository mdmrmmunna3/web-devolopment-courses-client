import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {

    const { signIn, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('')

    const navigate = useNavigate();

    // apply location by useLocation and send to location sate path
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogInSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                // email verify conditon
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email not verify ? Please check your email address and confirm to verify!')
                }
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
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

                <Button className='px-4 ' variant="primary" type="submit">
                    LogIn
                </Button>
                <Form.Text className="text-danger ms-2 fw-semibold">
                    {error}
                </Form.Text>
                <p className='text-dark'>You have no Account ? Please <Link className='text-decoration-none fw-semibold' to='/register'>Register</Link> </p>
            </Form>
        </div>
    );
};

export default Login;