import React from 'react';

const Speciality = () => {
	return (
		<div className="flex flex-col gap-8">
			<h3 className="font-bebas text-2xl">My Speciality</h3>
			<div className="flex flex-row justify-start gap-8">
				<h4
					className="text-center py-8 px-8 border border-zinc-300 tooltip"
					data-tip="React JS"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-center transition ease-in-out hover:text-yellow-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
						/>
					</svg>
				</h4>
			</div>
		</div>
	);
};

export default Speciality;
