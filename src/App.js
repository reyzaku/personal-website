import MainRouter from './MainRouter';

function App() {
	return (
		<div className="relative">
			<div className='phone:hidden tablet:hidden laptop:hidden desktop:block largerDevice:block'>
				<MainRouter />
			</div>
      <div className='phone:block tablet:block laptop:block desktop:block largerDevice:block'>
				Under Construction
			</div>
		</div>
	);
}

export default App;
