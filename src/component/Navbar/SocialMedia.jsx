import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const SocialMedia = () => {
	return (
		<div className="fixed bottom-12 left-12 z-10 flex flex-col gap-4">
			<div className="py-3 px-3 text-white bg-zinc-900">
				<InstagramIcon />
			</div>
			<div className="py-3 px-3 text-white bg-zinc-900">
				<GitHubIcon />
			</div>
			<div className="py-3 px-3 text-white bg-zinc-900">
				<LanguageIcon />
			</div>
		</div>
	);
};

export default SocialMedia;
