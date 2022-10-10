import React from 'react';
import arema from '../../media/Arema.png';

const ProjectCard = () => {
	return (
		<div className="flex justify-start gap-32 mb-72 items-center">
			<img src={arema} alt="tumbnail" className="w-[500px] h-[500px] object-cover" />
			<div className="flex flex-col gap-4">
				<h4 className="text-yellow-500 font-poppins text-xl">CASE STUDY</h4>
				<h3 className="text-zinc-900 text-5xl font-bebas">
					How to Make me Milionaire
				</h3>
				<h3 className="text-zinc-500 text-base font-light font-poppins leading-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
					facilisis mauris. Mauris pharetra euismod tempus. Proin quis est sed
					leo maximus molestie at a lorem. Cras vitae nulla euismod, ornare
					massa sed, pretium odio.{' '}
				</h3>
				<div>
					<button className="bg-white px-12 py-3 text-base flex gap-4 items-center border-zinc-900 border text-zinc-900 hover:text-white hover:shadow-[inset_15rem_0_0_0] hover:shadow-zinc-900 duration-[400ms,700ms] transition-[color,box-shadow]">
						SEE PROJECT
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
	);
};

export default ProjectCard;
