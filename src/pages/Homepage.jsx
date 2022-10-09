import React from 'react';
import Hero from '../component/homepage/Hero';
import Introduction from '../component/homepage/Introduction';
import Projects from '../component/homepage/Projects';

const Homepage = () => {
	return (
		<div className='relative'>
            <Hero/>
            <Introduction/>
            <Projects/>
        </div>
	);
};

export default Homepage;
