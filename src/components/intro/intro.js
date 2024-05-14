import React from 'react';
import './intro.css';
import bg from '../../assets/naruto.jpg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Rahul Pandit</span><br />Mern Stack Developer</span>
                <p className='introPara'>As a MERN Stack Developer, I architect and implement dynamic web applications, harnessing MongoDB, Express.js, React, and Node.js to craft scalable, responsive, and feature-rich solutions that drive user engagement and business growth</p>
                <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt="profile" className='bg'/>
        </section>
    )
}

export default Intro;
