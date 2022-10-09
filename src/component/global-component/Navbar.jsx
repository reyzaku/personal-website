import React from 'react';
import Logo from '../media/Logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
	return (
		<nav className="">
			<button className="text-white bg-zinc-900 py-3 px-3 fixed top-12 right-12 z-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
			<img src={Logo} alt="" className="fixed top-12 left-12 z-10 w-10" />
			<div className="py-3 px-3 bg-zinc-900 text-white fixed bottom-24 right-12 z-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
					/>
				</svg>
			</div>

			<div className="px-8 py-2 bg-zinc-900 text-white fixed bottom-12 right-12 z-10">
				<p className="font-poppins">RABDILAH7@GMAIL.COM</p>
			</div>

			<div className="fixed bottom-12 left-12 z-10 flex flex-col gap-4">
				<div className="py-3 px-3 text-white bg-zinc-900">
					<InstagramIcon />
				</div>
				<div className="py-3 px-3 text-white bg-zinc-900">
					<GitHubIcon />
				</div>
				<div className="py-3 px-3 text-white bg-zinc-900">
					<LanguageIcon />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
