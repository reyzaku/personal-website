import React from 'react';

const ProjectHeader = (props) => {
    console.log(props)
	return (
		<div className="font-poppins w-full h-screen bg-zinc-900 pt-30 flex align-middle justify-center relative">
			<div className="flex flex-col justify-center flex-nowrap">
				<h2 className="text-xl font-bebas tracking-wider text-white">
					rafienzy.com
				</h2>
				<h2 className="text-9xl font-bebas text-yellow-500">
					{props.title}
				</h2>
				<div className="flex flex-row-reverse gap-4 flex-nowrap">
					<h4 className="text-base text-white text-poppins">PROJECT</h4>
				</div>
			</div>
		</div>
	);
};

export default ProjectHeader;
