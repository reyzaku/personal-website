import React from 'react';
import Logo from '../media/Logo.png';
import Hamburger from '../Navbar/Hamburger';
import BackButton from '../Navbar/BackButton';
import SocialMedia from '../Navbar/SocialMedia';

const Navbar = () => {
	return (
		<nav>
			<Hamburger />
			<img src={Logo} alt="" className="fixed top-12 left-12 z-10 w-10" />
			<BackButton/>
			<button className="px-8 py-2 bg-zinc-900 text-white fixed bottom-12 right-12 z-10" onClick={() => window.open("mailto:rafienzyy@gmail.com?subject=Reqcruitment Inquiry", "_blank")}>
				<p className="font-poppins">RAFIENZYY@GMAIL.COM</p>
			</button>
			<SocialMedia/>
		</nav>
	);
};

export default Navbar;
