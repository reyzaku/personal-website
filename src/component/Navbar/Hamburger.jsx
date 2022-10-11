import React, { useState } from 'react';
import Drawer from './Drawer';

const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button
				className="text-white bg-zinc-900 py-3 px-3 fixed top-12 right-12 z-10"
				onClick={() => setIsOpen(true)}
			>
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

			<Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
		</div>
	);
};

export default Hamburger;
