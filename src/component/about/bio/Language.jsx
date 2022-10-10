import React from 'react';

const Language = () => {
	return (
		<div className="flex flex-col gap-8">
			<h3 className="font-bebas text-2xl">Language i can speak with</h3>
			<div className="flex flex-row justify-evenly gap-8">
				<h4 className="flex-1 text-center py-8 border border-zinc-300">
					English
				</h4>
				<h4 className="flex-1 text-center py-8 border border-zinc-300">
					Indonesia
				</h4>
			</div>
		</div>
	);
};

export default Language;
