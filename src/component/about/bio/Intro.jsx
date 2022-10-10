import React from 'react';
import me from '../../media/me.jpg';


const Intro = () => {
	return (
		<div className="flex flex-col gap-24 items-center">
			<div>
				<img src={me} alt="" className="rounded-full w-56 h-56 object-cover" />
			</div>
			<div>
				<h3 className="text-2xl text-yellow-500 font-poppins mb-2">
					HELLO THERE
				</h3>
				<h3 className="text-7xl text-zinc-900 font-bebas mb-4">
					My name is Rafi Abdilah
				</h3>
			</div>
			<p className="leading-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad mollitia
				consequatur, eligendi, distinctio perferendis nostrum reiciendis impedit
				voluptas quas dolores saepe consectetur quibusdam corporis cum. Deleniti
				ut, et minima optio provident nam cumque sequi voluptates distinctio
				est, necessitatibus labore laboriosam ad. Mollitia sapiente voluptas
				odio porro qui at quaerat!
			</p>
		</div>
	);
};

export default Intro;
