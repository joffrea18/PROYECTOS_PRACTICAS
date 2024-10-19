import React, { useState } from 'react';
import './Buttonppal.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Button } from 'react-native';

const Buttonppal = () => {

    const [menu, setMenu] = useState("shop");

    // Aquí se debe insertar una lógica que haga que cuando el botón esté
    // 0 se vea el botón, pero si está 1 se desaparezca.

    return (
        <div>
            <div>
            <p>MICROSYSCOM</p>
            </div>
             { <><Button className="menu-button" color= "primary">
                <p>OPTIONS</p>
            </Button><Menu>
                    <ul className="nav-menu">
                        <li onClick={() => { setMenu("shoes"); } }><Link style={{ textDecoration: 'none' }} to='/'>Services</Link>
                            {menu === "shoes" ? <hr /> : <></>} </li>
                        <li onClick={() => { setMenu("contact"); } }><Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
                            {menu === "contact" ? <hr /> : <></>} </li>
                    </ul>
                </Menu></>
        }
        </div>
    );
}

export default Buttonppal;
