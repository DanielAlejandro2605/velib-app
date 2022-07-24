import {useNavigate} from 'react-router-dom';
const Navbar = () => {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate('/');
	}
	const navigateToLogin = () => {
		navigate('/login');
	}
    return <>
		<nav className='main-nav'>
			<button onClick={navigateToHome}>Home</button>
			<button onClick={navigateToLogin}>Login</button>
      	</nav>
    </>;
}

export default Navbar;