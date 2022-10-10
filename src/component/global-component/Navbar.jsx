import React from 'react';

import Hamburger from '../Navbar/Hamburger';
import BackButton from '../Navbar/BackButton';
import SocialMedia from '../Navbar/SocialMedia';
import EmailButton from '../Navbar/EmailButton';
import Logo from '../Navbar/Logo';

const Navbar = () => {
	return (
		<nav>
			<Hamburger />
			<Logo />
			<BackButton/>
			<EmailButton/>
			<SocialMedia/>
		</nav>
	);
};

export default Navbar;
