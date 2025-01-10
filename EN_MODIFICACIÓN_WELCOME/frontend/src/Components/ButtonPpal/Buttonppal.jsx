import React, { useState } from 'react';
import './Buttonppal.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Buttonppal = () => {

    const [menu, setMenu] = useState("options");

    // Aquí se debe insertar una lógica que haga que cuando el botón esté
    // 0 se vea el botón, pero si está 1 se desaparezca.

    return (
        <div>
             { <>
             <form action="" className='menu-button'>
             <Button variant='contained' >
             <p>MICROSYSCOM</p>
             <Menu>
                    <ul className="nav-menu">
                        <li onClick={() => { setMenu("router"); } }><Link style={
                            { textDecoration: 'none' }} to='/routerinfo'>Router</Link>
                            {menu === "router" ? <hr /> : <></>} </li>
                        <li onClick={() => { setMenu("firewall"); } }><Link style={
                            { textDecoration: 'none' }} to='/firewallinfo'>Firewall</Link>
                            {menu === "firewall" ? <hr /> : <></>} </li>
                        <li onClick={() => { setMenu("switch"); } }><Link style={
                            { textDecoration: 'none'}} to='/switchinfo'>Switch</Link>
                            {menu === "switch" ? <hr /> : <></>}</li>
                    
                    </ul>
            </Menu>
            </Button>
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
