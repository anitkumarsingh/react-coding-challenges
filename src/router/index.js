import {Routes,Route} from 'react-router-dom';
import EmailChip from '../components/EmailChip';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Counter from '../pages/Counter';
import Users from '../pages/Users';
import StopCouter from '../pages/StopCounter';
import Modal from '../pages/Modal';
import ColorGuess from '../pages/Color/ColorGuess';
import ImageSlider from '../pages/ImageSlider/ImageSlider';
import DrawCircle from '../pages/Coordinate/DrawCircle';

const MainRoute = () => {
	return (
		<Routes>
			<Route element={<Home />} path='/' index />
			<Route element={<Login />} path='login' />
			<Route element={<EmailChip />} path='email-chips' />
			<Route element={<Counter />} path='counter' />
			<Route element={<Users />} path='users' />
			<Route element={<StopCouter />} path='watch' />
			<Route element={<Modal />} path='modal' />
			<Route element={<ColorGuess />} path='color' />
			<Route element={<ImageSlider />} path='slider' />
			<Route element={<DrawCircle />} path='circle' />
		</Routes>
	);
};

export default MainRoute;