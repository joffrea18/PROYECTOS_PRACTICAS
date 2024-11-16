import './Navbar.css';
import logo from '../../Assets/logo.jpg';
import logo_microsyscom from '../../Assets/logo-microsyscom.jpg';
// import { useState } from 'react';


const Navbar = () => {

const business = localStorage.getItem('business');


return (
    <div className='navbar'>
             <img
                id= 'img-name-logo'
                src={logo_microsyscom}
                alt='name-microsyscom'
            />
                {
                 business &&
                 <h1 className='business'>
                     { business}</h1>
                }
            
            <img 
                id= 'img-logo'
                src={logo}
                alt='logo-microsyscom' />
            
           
           </div>
);
}

export default Navbar;