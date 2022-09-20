import { useEffect } from 'react';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import './styles/main.css';
import './styles/responsive.css';

function App() {

	useEffect(() => {
		AOS.init({
			delay: 0,
			offset: 50,
			duration: 1000,
			startEvent: 'load'
		});
		AOS.refresh();
	}, []);


	return (
		<div className="container-fluid">
			<Home />
		</div>
	);
}

export default App;
