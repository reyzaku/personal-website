import React from 'react';
import Education from './bio/Education';
import Intro from './bio/Intro';
import Language from './bio/Language';
import Speciality from './bio/Speciality';
import Technology from './bio/Technology';
import WorkExperience from './bio/WorkExperience';

const Bio = () => {
	return (
		<div className="font-poppins w-full h-full py-52 bg-white pt-30 relative text-zinc-900">
			<div className="flex flex-col justify-center desktop:mx-72 laptop:mx-64 gap-48">
				<Intro />
				<WorkExperience />
				<Education />
				<Language />
				<Speciality />
				<Technology />
			</div>
		</div>
	);
};

export default Bio;
