import './Buttonppal.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { slide as Menu } from 'react-burger-menu';
import React, { useState } from 'react';
import Options from './Options';


const Buttonppal = ({ emailAddress }) => {

    const [menu, setMenu] = useState("options");
    // He metido una mueva variable que me retorne
    // un valor NO UNDEFINED, pasando este nuevo valor
    // como props en el Component.
    // VALIDAR FUNCIONALIDAD
    const email = emailAddress.toString();
    
    return (
        <div>
             { <>
                <form action="" className='menu-button'>
                    <Link
                    to={<Options email={email}/>}>
                <Button variant='contained' >
                    <p>MICROSYSCOM</p>
                </Button>
            </Link>
            <section>
                <Link style={{textDecoration: 'none'}} to='/' ><h1>BACK HOME</h1>
                </Link>
            </section>
            </form>
               </>
            }
        </div>
    );
}

export default Buttonppal;


/*


____________________________________________________________________________

             <form action="" className='menu-button'>
            <Link
                style={{textDecoration: 'none'}}
                to='/buttonppal/{id}'>
                    <Button variant='contained' >
                     <p>MICROSYSCOM</p>
                    </Button>
            </Link>
            <section>
                <Link style={{textDecoration: 'none'}}
                    to='/'>
                    <h1>CLEAR</h1>
                </Link>
            </section>
            </form>


________________________________________________________________________
             <Menu>
                    <ul className="nav-menu">
                        <li onClick={() => { setMenu("router"); } }>
                            <Link
                            style={{ textDecoration: 'none' }}
                            to='/buttonppal/routerinfo/{id}'
                            emailAddress={emailAddress}
                            >
                            Router
                            </Link>
                            {menu === "router" ? <hr /> : <></>} </li>
                        <li onClick={() => { setMenu("firewall"); } }><Link style={
                            { textDecoration: 'none' }} to='/firewallinfo'>Firewall</Link>
                            {menu === "firewall" ? <hr /> : <></>} </li>
                        <li onClick={() => { setMenu("switch"); } }><Link style={
                            { textDecoration: 'none'}} to='/switchinfo'>Switch</Link>
                            {menu === "switch" ? <hr /> : <></>}</li>
                    
                    </ul>
            </Menu>

*/