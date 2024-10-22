import React, { useState } from 'react';
import './Buttonppal.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import FirewallInfo from '../../Pages/FirewallInfo';
import RouterInfo from '../../Pages/RouterInfo';
import SwitchInfo from '../../Pages/SwitchInfo';
import { Button } from '@mui/material';
import Navbar from '../Navbar/Navbar';

const Options = ({ businessA, id }) => {

    // const [menu, setMenu] = useState("options");

    // const businessOption = businessA.toString();
    console.log(businessA, id);
    
    return (
            <div>
                <h1>{id}</h1>
                <Button >
                <p>{ businessA }</p>
                    OPTIONS
                 <Menu>
                    <Link
                        to='/buttonppal/routerinfo/{id}'
                        >
                        <p>Router</p>
                    </Link>
                    <Link
                        to='/buttonppal/firewallinfo/{id}'
                        >
                        <p>Firewall</p>
                    </Link>
                    <Link
                        to='/buttonppal/switchinfo/{id}'
                        >
                        <p>Switch</p>
                    </Link>
                    </Menu>
                </Button>
                </div>
    );
}

export default Options;
