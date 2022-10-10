import React, { useEffect, useState } from 'react';

const BackButton = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div>
			{showTopBtn && (
				<button className="py-3 px-3 bg-zinc-900 text-white fixed bottom-24 right-12 z-10" onClick={goToTop}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 transition ease-in-out hover:text-yellow-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default BackButton;
