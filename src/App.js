import MainRouter from './MainRouter';

function App() {
	return (
		<div className="relative bg-white">
			<div className="phone:hidden tablet:hidden laptop:block desktop:block largerDevice:block">
				<MainRouter />
			</div>
			<div className="phone:block tablet:block laptop:hidden desktop:hidden largerDevice:hidden">
				Under Construction
			</div>
		</div>
	);
}

export default App;
