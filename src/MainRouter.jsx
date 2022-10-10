import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Homepage from './pages/Homepage';

const MainRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Homepage />} />
				<Route path='/me' element={<About />} />
			</Routes>
		</Router>
	);
};

export default MainRouter;
