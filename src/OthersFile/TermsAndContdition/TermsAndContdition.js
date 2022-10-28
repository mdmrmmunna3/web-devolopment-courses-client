import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndContdition = () => {
    return (
        <div>
            <div>
                <h3>Here is our Terms and Conditions</h3>
                <p>Go back to <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default TermsAndContdition;