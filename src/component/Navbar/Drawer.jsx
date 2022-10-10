import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/Logo.png';

const Drawer = ({ isOpen, setIsOpen }) => {
	return (
		<main
			className={
				' fixed overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out' +
				(isOpen
					? ' transition-opacity opacity-100 duration-500 translate-x-0  '
					: ' transition-all delay-500 opacity-0 translate-x-full  ')
			}
		>
			<section
				className={
					' w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full ')
				}
			>
				<div className="flex flex-col mb-8 items-center h-screen py-32 font-poppins bg-zinc-900">
					<img src={Logo} alt="" className="w-16 mb-12" />
					<Link
						to={`/`}
						className="text-xl w-full text-white hover:text-yellow-400 hover:bg-zinc-800 text-center py-8"
					>
						<li className="list-none">HOME</li>
					</Link>
					<Link
						to={`/gallery`}
						className="text-xl w-full text-white hover:text-yellow-400 hover:bg-zinc-800 text-center py-8"
					>
						<li className="list-none">GALLERY</li>
					</Link>
					<Link
						to={`/me`}
						className="text-xl w-full text-white hover:text-yellow-400 hover:bg-zinc-800 text-center py-8"
					>
						<li className="list-none">ABOUT ME</li>
					</Link>

					<button
						className=" hover:text-blue-500 absolute top-10 right-10"
						onClick={() => {
							setIsOpen(false);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</section>
			<section
				className=" w-screen h-full cursor-pointer "
				onClick={() => {
					setIsOpen(false);
				}}
			></section>
		</main>
	);
};

export default Drawer;
