import React from 'react';

const Education = () => {
	return (
		<div className="flex flex-col gap-16">
			<h3 className="font-bebas text-2xl">MY EDUCATION HISTORY</h3>

			<div className="flex flex-col gap-4 mb-8">
				<h4 className="font-bebas text-5xl">MALAKA VOCATIONAL HIGHSCHOOL</h4>
				<div className="flex gap-4 text-sm text-zinc-400">
					<p>2013 - 2016</p> |<p>Multimedia Graduated</p>
				</div>
			</div>

			<div className="flex flex-col gap-4 mb-8">
				<h4 className="font-bebas text-5xl">GUNADARMA UNIVERSITY</h4>
				<div className="flex gap-4 text-sm text-zinc-400">
					<p>2016 - 2022</p> |<p>Bachelor Degree of Information System</p> | <p>GPA: 3.34</p>
				</div>
			</div>

			<div className="flex flex-col gap-4 mb-8">
				<h4 className="font-bebas text-5xl">SanberCode</h4>
				<div className="flex gap-4 text-sm text-zinc-400">
					<p>2021</p> |<p>Non Formal Bootcamp Class of React Js</p>
				</div>
			</div>
		</div>
	);
};

export default Education;
