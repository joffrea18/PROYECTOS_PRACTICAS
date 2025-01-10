import './Navbar.css';
import logo from '../../Assets/logo.jpg';
import logomicrosyscom from '../../Assets/logo-microsyscom.jpg';


const Navbar = () => {

    return (
        <div className='navbar'>
            <img src={logo} alt='' /> 
            <img id='logo' src={logomicrosyscom} alt='' />          
          
        </div>
    );
}

export default Navbar;