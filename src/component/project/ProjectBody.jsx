import React from 'react';

const ProjectBody = (props) => {
	console.log(props)
	return (
		<div className="flex flex-col gap-16 text-zinc-900 font-poppins">
			{props.children}
		</div>
	);
};

export default ProjectBody;
