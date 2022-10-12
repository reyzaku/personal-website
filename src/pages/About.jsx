import React from 'react'
import Bio from '../component/about/Bio';
import Hero from '../component/about/Hero';
import Footer from '../component/global-component/Footer';
import Navbar from '../component/global-component/Navbar';

const About = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Bio/>
            <Footer/>
        </div>
    )
}

export default About