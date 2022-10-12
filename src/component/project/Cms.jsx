import React from 'react';
import ProjectBody from './ProjectBody';
import ProjectHeader from './ProjectHeader';
import cms1 from './media/cms1.png';
import cms2 from './media/cms2.png';
import cms3 from './media/cms3.jpeg';

const Cms = () => {
	return (
		<div>
			<ProjectHeader title="Creating Block type CMS like Dev.to with React And Tailwind CSS (On Going)" />
			<div className="flex flex-col justify-center laptop:mx-72 desktop:mx-96 py-32 gap-48">
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
							A few moments ago I like making a website using WordPress because
							of its simplicity and ease to use for making block-type websites
							and content. and after I graduate and know how to code, I have
							this idea to make the same app like that, a CMS App that doesn't
							use WYSIWYG form but rather uses block typewriting. Because of
							that idea, I began my research by looking for the same app that
							has that feature. I find out that Medium.com, Dev.to, and
							WordPress have these features. so took their inspiration and ask
							one of my friends who have back-end skill to collaborate with me
							to create this project. This project began in September and we
							plan to make a fully polished website. Currently, this website is
							still on Version 1 and only has Authentication and Creating
							Article features. We are making sure to keep updating this app to
							become Dev.to clone.
						</p>
					</div>

					<div className="flex flex-col gap-8 mb-32">
						<div className="flex laptop:flex-col desktop:flex-row justify-evenly gap-8">
							<div className="flex-1 flex flex-col py-8 laptop:border-b desktop:border-r desktop:border-b-0 border-zinc-300">
								<h4 className="font-bebas mb-4">My Roles</h4>
								<li className="decoration-none">UI/UX Designer</li>
								<li>Front End Developer</li>
							</div>
							<div className="flex-1 py-8 laptop:border-b desktop:border-r desktop:border-b-0 border-zinc-300">
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
						<p className="font-bebas text-3xl">Homepage</p>
						<img src={cms2} alt="" className="rounded-xl w-full mb-32" />
						<p className="font-bebas text-3xl">Create Post Page</p>
						<img src={cms3} alt="" className="rounded-xl w-full mb-32" />
						<p className="font-bebas text-3xl">Article Page</p>
						<img src={cms1} alt="" className="rounded-xl w-full mb-32" />
					</div>
				</ProjectBody>
			</div>
		</div>
	);
};

export default Cms;
