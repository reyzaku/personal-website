import MainRouter from './MainRouter';
import Error from './pages/404Error';

function App() {
	return (
		<div className="relative bg-white">
			<div className="phone:hidden tablet:hidden laptop:block desktop:block largerDevice:block">
				<MainRouter />
			</div>
			<div className="phone:block tablet:block laptop:hidden desktop:hidden largerDevice:hidden">
				<Error/>
			</div>
		</div>
	);
}

export default App;
