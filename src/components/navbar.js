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
			<button className='button-nav' onClick={navigateToHome}>Home</button>
			<button className='button-nav' onClick={navigateToLogin}>Login</button>
      	</nav>
    </>;
}

export default Navbar;