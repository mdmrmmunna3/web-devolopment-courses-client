import React from 'react';
import logo from '../../assets/banner/learn-web-development.png';
import SliderMenu from '../../shared/Slider/SliderMenu';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
           <div className='banner'> <img className='' src={logo} alt="" /></div>
           <SliderMenu></SliderMenu>
        </div>
    );
};

export default Home;