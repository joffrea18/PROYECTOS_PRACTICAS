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
             <Button variant='contained' className='menu-button'>
             <p>MICROSYSCOM</p>
             <Menu>
                    <ul className="nav-menu">
                        <li onClick={() => { setMenu("services"); } }><Link style={{ textDecoration: 'none' }} to='/services'>Services</Link>
                            {menu === "services" ? <hr /> : <></>} </li>
                        <li onClick={() => { setMenu("contact"); } }><Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
                            {menu === "contact" ? <hr /> : <></>} </li>
                    </ul>
            </Menu>
            </Button>
                </>
        }
        </div>
    );
}

export default Buttonppal;
