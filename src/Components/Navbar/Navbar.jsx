import './Navbar.css';
import logo from '../../Assets/logo.jpg';


const Navbar = () => {

    return (
        <div className='navbar'>
            <img src={logo} alt='' />            
            {/* <h1>{emailAddress}</h1> */}
        </div>
    );
}

export default Navbar;