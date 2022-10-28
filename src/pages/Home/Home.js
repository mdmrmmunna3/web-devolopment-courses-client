import React from 'react';
import logo from '../../assets/banner/learn-web-development.png';
import Footer from '../../shared/Footer/Footer';
import SliderMenu from '../../shared/Slider/SliderMenu';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='banner'> <img className='' src={logo} alt="" /></div>
                <SliderMenu></SliderMenu>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;