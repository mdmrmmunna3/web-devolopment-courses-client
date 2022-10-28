import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-f'>

                <div className='child-com'>
                    <h3>Service :</h3>
                    <div>
                        <li>Development</li>
                        <li>Hosting</li>
                        <li>Special FeadBack</li>
                        <li>AlTime Support</li>
                    </div>
                </div>

                <div className='child-com'>
                    <h3>About :</h3>
                    <div>
                        <li>Company</li>
                        <li>Careers</li>
                        <li>Tems</li>
                    </div>
                </div>

                <div className='child-com'>
                    <h3>Contact: </h3>
                    <div>
                        <li>Course</li>
                        <li>course</li>
                        <li>Course</li>
                    </div>
                </div>
            </div>
            <div className='text-center pb-4'>
                <FaFacebook className='me-4 fs-2'></FaFacebook>
                <FaTwitch className='me-4 fs-2'></FaTwitch>
                <FaTwitter className='me-4 fs-2'></FaTwitter>
                <FaYoutube className='me-4 fs-2'></FaYoutube>
                <FaGoogle className='me-4 fs-2'></FaGoogle>
                <FaGithub className='me-4 fs-2'></FaGithub>
            </div>
        </div>
    );
};

export default Footer;