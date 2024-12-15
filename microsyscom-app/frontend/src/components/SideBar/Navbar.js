import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo_microsyscom from '../../Assets/logo-microsyscom.jpg';
import logo from '../../Assets/logo.jpg';
import Welcome from '../Welcome/Welcome.js';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <div className='navbar'>
    <Link to='#' className='menu-bars'>
    <FaIcons.FaBars onClick={showSidebar} />
    </Link>
    <section>
      <a href={'http://localhost:3000/'}>
    <img 
    className='logo'
    alt='logo'
    src={logo}
    />
    </a>
    </section>
    <section>
    <img
      className='img_name'
      alt='logo_name'
      src={logo_microsyscom} />
    </section>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    <ul className='nav-menu-items' onClick={showSidebar}>
    <li className='navbar-toggle'>
    <Link to='#' className='menu-bars'>
    <AiIcons.AiOutlineClose />
    </Link>
    </li>
    {SidebarData.map((item, index) => {
      return (
        <li key={index} className={item.cName}>
        <Link to={item.path}>
        {item.icon}
        <span>{item.title}</span>
        </Link>
        </li>
      );
    })}
    </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;
