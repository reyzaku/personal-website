import React from 'react';
import ProjectBody from './ProjectBody';
import ProjectHeader from './ProjectHeader';
import cms1 from './media/cms1.png'
import cms2 from './media/cms2.png'
import cms3 from './media/cms3.jpeg'

const Cms = () => {
	return (
		<div>
			<ProjectHeader title="Creating Block type CMS like Dev.to with React And Tailwind CSS" />
			<div className="flex flex-col justify-center mx-96 py-32 gap-48">
				<ProjectBody>
					<div className="flex flex-col gap-8">
						<div className="flex flex-row justify-evenly gap-8 mb-16 font-bebas">
							<button
								className="flex-1 text-center text-xl py-8 border border-zinc-300 hover:text-white hover:shadow-[inset_35rem_0_0_0] hover:shadow-yellow-500 duration-[400ms,700ms] transition-[color,box-shadow]"
								onClick={() =>
									window.open(
										'https://github.com/reyzaku/Content-Management-System',
										'_blank'
									)
								}
							>
								GIT REPO
							</button>
							<button
								className="flex-1 text-center text-xl py-8 border text-zinc-300 border-zinc-300 tooltip"
								data-tip="Not available right now"
							>
								<h4>DEMO APP</h4>
							</button>
						</div>
						<h3 className="font-bebas text-5xl">Project Overview</h3>
						<p className="leading-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad
							mollitia consequatur, eligendi, distinctio perferendis nostrum
							reiciendis impedit voluptas quas dolores saepe consectetur
							quibusdam corporis cum. Deleniti ut, et minima optio provident nam
							cumque sequi voluptates distinctio est, necessitatibus labore
							laboriosam ad. Mollitia sapiente voluptas odio porro qui at
							quaerat!
						</p>
					</div>

					<div className="flex flex-col gap-8 mb-32">
						<div className="flex flex-row justify-evenly gap-8">
							<div className="flex-1 flex flex-col py-8 border-r border-zinc-300">
								<h4 className="font-bebas mb-4">My Roles</h4>
								<li className="decoration-none">UI/UX Designer</li>
								<li>Front End Developer</li>
							</div>
							<div className="flex-1 py-8 border-r border-zinc-300">
								<h4 className="font-bebas mb-4">Created with</h4>
								<li className="decoration-none">React JS</li>
								<li className="decoration-none">Redux</li>
								<li className="decoration-none">Tailwind CSS</li>
							</div>
							<div className="flex-1 py-8 border-zinc-300">
								<h4 className="font-bebas mb-4">Date</h4>
								<li className="decoration-none">September 2022</li>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<h3 className="font-bebas text-5xl mb-32">Project Preview</h3>
						<p className='font-bebas text-3xl'>Homepage</p>
						<img src={cms2} alt="" className="rounded-xl w-full mb-32" />
						<p className='font-bebas text-3xl'>Create Post Page</p>
						<img src={cms3} alt="" className="rounded-xl w-full mb-32" />
						<p className='font-bebas text-3xl'>Article Page</p>
						<img src={cms1} alt="" className="rounded-xl w-full mb-32" />
					</div>
				</ProjectBody>
			</div>
		</div>
	);
};

export default Cms;
