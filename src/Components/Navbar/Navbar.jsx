import './Navbar.css';
import logo from '../../Assets/logo.jpg';
// import { useState } from 'react';


const Navbar = ({ emailAddress }) => {

   // const [ emailAddress, setEmailAddress ] = useState('');

    return (
        <div className='navbar'>
            {
                emailAddress ?
                {emailAddress} :
                <img src={logo} alt='' />
            }
        </div>
    );
}

export default Navbar;