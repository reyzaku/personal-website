import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Homepage from './pages/Homepage';
import ProjectPages from './pages/ProjectPages';

const MainRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Homepage />} />
				<Route path='/me' element={<About />} />
				<Route path="/project/:id" element={<ProjectPages/>}/>
				<Route path='/gallery' element={<Gallery />} />
			</Routes>
		</Router>
	);
};

export default MainRouter;
