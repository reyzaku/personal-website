import React from 'react';

const Hero = () => {
	return (
		<div className="font-poppins w-full h-screen bg-yellow-400 pt-30 flex align-middle justify-center relative">
			<div className="flex flex-col justify-center flex-nowrap">
				<h2 className="text-xl font-bebas tracking-wider text-white">
					WEB PORTFOLIO
				</h2>
				<h2 className="text-9xl font-bebas text-zinc-900">Rafi Abdilah</h2>
				<div className="flex flex-row-reverse gap-4 flex-nowrap">
					<h4 className="text-base text-zinc-900">UI/UX</h4>
					<h4 className="text-base text-zinc-900">WEB DEVELOPER</h4>
					<h4 className="text-base text-zinc-900">DESIGN</h4>
				</div>
			</div>
		</div>
	);
};

export default Hero;
