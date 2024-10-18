import React, { useState } from 'react';
import './Navbar.css';
// import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

// Pendiente insetar logo

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                {/* <img src={logo} alt='' /> */}
                <p>MICROSYSCOM</p>
            </div>
            <Menu>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("shoes")}}><Link style={{textDecoration : 'none' }} to='/'>Services</Link>{menu === "shoes" ? <hr/> : <></> } </li>
                {/* <li onClick={() => {setMenu("electronic")}}><Link style={{textDecoration : 'none' }} to='/electronic'>Electonic</Link>{menu === "electronic" ? <hr/> : <></> } </li> */}
                <li onClick={() => {setMenu("contact")}}><Link style={{textDecoration : 'none' }} to='/contact'>Contact</Link>{menu === "contact" ? <hr/> : <></> } </li>
            </ul>
        </Menu>
        </div>
    );
}

export default Navbar;