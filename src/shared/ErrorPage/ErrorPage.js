import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error'>

            <div >
                <h1 className='fs-3'>Ops! An Error Ocurred! </h1>
                <p><span className='text-danger'>404 Not Found</span></p>
                <Link to='/'><p className='text-primary'>Please Go to the Home Page!</p></Link>
            </div>
        </div>

    );
};

export default ErrorPage;