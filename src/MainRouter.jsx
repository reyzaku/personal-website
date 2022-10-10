import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

const MainRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
		</Router>
	);
};

export default MainRouter;
