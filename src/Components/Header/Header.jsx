import './Header.css';
import React from 'react';
import logo from '../../Assets/logo.jpg';
import Buttonppal from '../ButtonPpal/Buttonppal';

const Header = () => {
    return (
        <div>
            <div className='header-logo'>
                <img src={logo} alt='' />            
            </div>
        <Buttonppal className='header-button'/>
        </div>
    );
}

export default Header;
