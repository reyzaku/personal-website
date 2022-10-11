import React from 'react';
import me from '../../media/me.jpg';

const Intro = () => {
	return (
		<div className="flex flex-col gap-24 items-center">
			<div>
				<img src={me} alt="" className="rounded-full w-56 h-56 object-cover" />
			</div>
			<div>
				<h3 className="text-2xl text-yellow-500 font-poppins mb-2">
					HELLO THERE
				</h3>
				<h3 className="text-7xl text-zinc-900 font-bebas mb-4">
					My name is Rafi Abdilah
				</h3>
			</div>
			<p className="leading-10">
				I am a Fresh Graduate from Information System of Gunadarma University. I
				have experience in creating Website with React JS Framework and Know how
				to use Javascript. I also have experience as UI/UX Designer from my
				previous work. Currently i am persuing Front End Developer Path, in this
				year alone i keep practicing javascript and React
			</p>
		</div>
	);
};

export default Intro;
