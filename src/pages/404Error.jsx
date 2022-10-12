import React from 'react';

const Error = () => {
	return (
		<section className="flex items-center h-full p-16 bg-yellow-400 font-poppins">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
						<span className="sr-only ">Error</span>404
					</h2>
					<p className="text-2xl font-semibold md:text-3xl text-zinc-900">
						I am sorry, my website cant be view with Phone Screen Size.
					</p>
					<p className="mt-4 mb-8 text-zinc-900">
						But dont worry, you can see my beatiful website on your Desktop or PC Screen :).
					</p>
				</div>
			</div>
		</section>
	);
};

export default Error;
