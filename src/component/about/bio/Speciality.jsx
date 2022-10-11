import React from 'react';

const Speciality = () => {
	const speciality = ["UI/UX Design", "Programming", "Graphic Design"]
	return (
		<div className="flex flex-col gap-8">
			<h3 className="font-bebas text-2xl">My Speciality</h3>
			<div className="flex flex-row justify-start gap-8">
				{speciality.map((item, index) => (
					<h4
						className="text-center py-8 px-8 border border-zinc-300 tooltip"
						data-tip={item}
						key={index + 1}
					>
					{item}
					</h4>
				))}
			</div>
		</div>
	);
};

export default Speciality;
