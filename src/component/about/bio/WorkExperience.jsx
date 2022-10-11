import React from 'react';

const WorkExperience = () => {
	return (
		<div className="flex flex-col gap-16">
			<h3 className="font-bebas text-2xl">MY WORK EXPERIENCE</h3>

			<div className="flex flex-col gap-4">
				<h4 className="font-bebas text-5xl">Justive</h4>
				<div className="flex gap-4 text-sm text-zinc-400">
					<p>March 2022</p> |<p>Graphic Designer</p>
				</div>
				<li>Designing 20 Instagram Post for 1 Month</li>
				<li>Designing 6 Instagram Story for 1 Month</li>
			</div>

			<div className="flex flex-col gap-4">
				<h4 className="font-bebas text-5xl">PT. Jaya Informatika Nusantara</h4>
				<div className="flex gap-4 text-sm text-zinc-400">
					<p>March 2022 - November 2022</p> |<p>UI/UX Designer</p>
				</div>
				<li>Creating UI for website</li>
				<li>Managing all company design needed</li>
				<li>Creating Mockup using Wordpress Elementor</li>
			</div>

			<div className="flex flex-col gap-4">
				<h4 className="font-bebas text-5xl">Sagara Technology</h4>
				<div className="flex gap-4 text-sm text-zinc-400">
					<p>November 2022</p> |<p>UI/UX Designer</p>
				</div>
				<li>Creating UI for website</li>
			</div>
		</div>
	);
};

export default WorkExperience;
