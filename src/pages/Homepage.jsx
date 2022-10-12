import React from 'react';
import Footer from '../component/global-component/Footer';
import Navbar from '../component/global-component/Navbar';
import Hero from '../component/homepage/Hero';
import Introduction from '../component/homepage/Introduction';
import Projects from '../component/homepage/Projects';

const Homepage = () => {
	return (
		<div>
            <Navbar/>
            <Hero/>
            <Introduction/>
            <Projects/>
            <Footer/>
        </div>
	);
};

export default Homepage;
