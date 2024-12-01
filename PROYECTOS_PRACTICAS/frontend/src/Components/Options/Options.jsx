import { Link } from 'react-router-dom';
import './Options.css';

const Options = ({ isMenuOpen, toggleMenu }) => {

    
    return (
    <div 
        id='options_menu'
        className={`options ${isMenuOpen ? "open" : "closed"}`}>
        <br />
        <br />
        <p 
            className='options-menu'
            style={
            {color: 
                'white'
            }
        }>
        OPTIONS
        </p>
      <section
        className='navbar'>
        <br />
    <ul>
    <li>
    <Link 
        style={{textDecoration : 'none' }}
        to={`/buttonppal/routerinfo`}>
    Router
    </Link>
    </li>
    <Link 
    style={{textDecoration : 'none' }}
    to={`/buttonppal/firewallinfo`}>
    <li>
    Firewall
    </li>
    </Link>
    <Link 
    style={{textDecoration : 'none' }}
    to={`/buttonppal/switchinfo`}>
    <li>
    Switch
    </li>
    </Link>
    <Link 
    style={{textDecoration : 'none' }}
    to={`/buttonppal/accespointinfo`}>
    <li>
    Acces Point
    </li>
    </Link>
    <Link 
    style={{textDecoration : 'none' }}
    to={`/buttonppal/xdr`}>
    <li>
    XDR
    </li>
    </Link>
    <Link 
    style={{textDecoration : 'none' }}
    to={`/buttonppal/servidoresinfo`}>
    <li>
    Servidores
    </li>
    </Link>
    <Link 
    style={{textDecoration : 'none' }}
    to={`/buttonppal/printeroption`}>
    <li>    
    Print Report
    </li>
    </Link>
    </ul>
    </section>
        </div>
    );
}

export default Options;