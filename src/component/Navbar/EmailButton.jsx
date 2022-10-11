import React from 'react';

const EmailButton = () => {
	return (
		<button
			className="px-8 py-2 bg-zinc-900 text-white fixed bottom-12 right-12 z-10"
			onClick={() =>
				window.open(
					'mailto:rafienzyy@gmail.com?subject=Reqcruitment Inquiry',
					'_blank'
				)
			}
		>
			<p className="font-poppins">RAFIENZYY@GMAIL.COM</p>
		</button>
	);
};

export default EmailButton;
