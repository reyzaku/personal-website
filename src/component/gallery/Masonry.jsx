import React from 'react';
import Arema from '../media/Arema.png'
import Coffee from '../media/Coffee.png'
import Jnius from '../media/Jnius.png'
import JobAgenncy from '../media/JobAgency.png'
import LandingPage from '../media/LandingPage.png'
import OnlineCourse from '../media/OnlineCourse.png'
import Podcast from '../media/Podcast.png'
import Recipe from '../media/Recipe.png'
import Rent from '../media/Rent.png'
import SitrenApp from '../media/SitrenApp.png'
import SitrenWeb from '../media/SitrenWeb.png'
import SocialMedia from '../media/SocialMedia.png'
import Steam from '../media/Steam.png'
import Travel from '../media/Travel.png'


const Masonry = () => {
	return (
		<div className="gap-8 columns-3 mx-96 py-32">
			<img src={Arema} alt="gallery" className="w-full aspect-video mb-6 object-cover hover:scale-90" />
			<img src={Coffee} alt="gallery" className="w-full aspect-square mb-6 object-cover hover:scale-90" />
			<img src={Jnius} alt="gallery" className="w-full aspect-video mb-6 object-cover hover:scale-90" />
			<img src={JobAgenncy} alt="gallery" className="w-full aspect-video mb-6 object-cover hover:scale-90" />
			<img src={LandingPage} alt="gallery" className="w-full aspect-square mb-6 object-cover hover:scale-90" />
			<img src={OnlineCourse} alt="gallery" className="w-full aspect-video mb-6 object-cover hover:scale-90" />
			<img src={Podcast} alt="gallery" className="w-full aspect-square mb-6 object-cover hover:scale-90" />
			<img src={Recipe} alt="gallery" className="w-full aspect-square mb-6 object-cover hover:scale-90" />
			<img src={Rent} alt="gallery" className="w-full aspect-video mb-6 object-cover hover:scale-90" />
			<img src={SitrenApp} alt="gallery" className="w-full aspect-video mb-6 object-cover hover:scale-90" />
			<img src={SitrenWeb} alt="gallery" className="w-full aspect-square mb-6 object-cover hover:scale-90" />
			<img src={SocialMedia} alt="gallery" className="w-full aspect-video mb-6 object-cover hover:scale-90" />
			<img src={Steam} alt="gallery" className="w-full aspect-square mb-6 object-cover hover:scale-90" />
			<img src={Travel} alt="gallery" className="w-full aspect-square mb-6 object-cover hover:scale-90" />
		</div>
	);
};

export default Masonry;
