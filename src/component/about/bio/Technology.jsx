import React from 'react';
import Bootstrap from '../media/bootstrap.png'
import ReactLogo from '../media/react.png'
import Redux from '../media/redux.png'
import Tailwind from '../media/tailwind.png'
import Wordpress from '../media/wordpress.png'
import Elementor from '../media/elementor.webp'
import Figma from '../media/figma.png'
import Photoshop from '../media/photoshop.png'

const Technology = () => {
	const TechnologyArray = [
		{
			name: 'React',
			image: ReactLogo,
		},
		{
			name: 'Redux',
			image: Redux,
		},
		{
			name: 'Tailwind CSS',
			image: Tailwind,
		},
		{
			name: 'Bootstrap',
			image: Bootstrap,
		},
		{
			name: 'Wordpress',
			image: Wordpress,
		},
		{
			name: 'Elementor',
			image: Elementor,
		},
		{
			name: 'Figma',
			image: Figma,
		},
		{
			name: 'Photoshop',
			image: Photoshop,
		},
	];

	return (
		<div className="flex flex-col gap-8">
			<h3 className="font-bebas text-2xl">Technology i can work with</h3>
			<div className="flex flex-row justify-start gap-8 flex-wrap">
				{TechnologyArray.map((item, index) => (
					<div className='w-16 h-16 tooltip' data-tip={item.name} key={index + 1}>
						<img src={item.image} alt="" className="object-cover"/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Technology;
