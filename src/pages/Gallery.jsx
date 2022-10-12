import React from 'react';
import Masonry from '../component/gallery/Masonry';
import Footer from '../component/global-component/Footer';
import Navbar from '../component/global-component/Navbar';
import ProjectHeader from '../component/project/ProjectHeader';

const Gallery = () => {
	return (
		<div>
			<Navbar />
			<ProjectHeader title="Work Gallery" />
			<Masonry />
			<Footer/>
		</div>
	);
};

export default Gallery;
