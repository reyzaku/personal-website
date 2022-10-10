import React from 'react';
import me from '../media/me.jpg';

const Introduction = () => {
	return (
		<div className="font-poppins w-full h-screen bg-zinc-900 pt-30 flex align-middle justify-center relative">
			<div className="flex flex-col justify-center">
				<div className="flex flex-row gap-32 items-center">
					<div>
						<img src={me} alt="" className="w-full" />
					</div>
					<div>
						<h3 className="text-2xl text-white font-poppins mb-2">HELLO THERE</h3>
						<h3 className="text-7xl text-white font-bebas mb-8">
							Welcome to my Portfolio
						</h3>
						<p className="text-xl text-white leading-10 mb-8">
							IF YOU WANT TO KNOW ME, YOU CAN READ MY BIO BELLOW
						</p>
						<button className="bg-zinc-900 px-24 py-4 text-xl flex gap-4 items-center border-neutral-400 border text-white hover:text-white hover:shadow-[inset_24rem_0_0_0] hover:shadow-yellow-500 duration-[400ms,700ms] transition-[color,box-shadow]">
							MY BIO
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
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
