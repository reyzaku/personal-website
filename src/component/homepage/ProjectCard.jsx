import React from 'react';
import { Link } from 'react-router-dom';


const ProjectCard = (props) => {

	return (
		<div className="flex laptop:flex-col desktop:flex-row justify-start gap-32 mb-72 items-center">
			<img
				src={props.image}
				alt="tumbnail"
				className="w-[500px] h-[500px] laptop:w-[400px] laptop:h-[400px] object-cover"
			/>
			<div className="flex flex-col gap-4">
				<h3 className="text-zinc-900 text-5xl font-bebas">
					{props.title}
				</h3>
				<h3 className="text-zinc-500 text-base font-light font-poppins leading-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
					facilisis mauris. Mauris pharetra euismod tempus. Proin quis est sed
					leo maximus molestie at a lorem. Cras vitae nulla euismod, ornare
					massa sed, pretium odio.{' '}
				</h3>
				<div>
					<Link to={`/project/${props.project}`}>
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
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
