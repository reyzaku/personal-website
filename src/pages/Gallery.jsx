import React from 'react';
import Masonry from '../component/gallery/Masonry';
import Navbar from '../component/global-component/Navbar';
import ProjectHeader from '../component/project/ProjectHeader';

const Gallery = () => {
	return (
		<div>
			<Navbar />
			<ProjectHeader title="Work Gallery" />
			<Masonry />
		</div>
	);
};

export default Gallery;
