import React, { useState } from 'react';
import './Buttonppal.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import FirewallInfo from '../../Pages/FirewallInfo';
import RouterInfo from '../../Pages/RouterInfo';
import SwitchInfo from '../../Pages/SwitchInfo';
import { Button } from '@mui/material';

const Options = ({ businessA, id }) => {

    const [menu, setMenu] = useState("options");

    return (
        <div>
            <Button >
                OPTIONS
             <Menu>
                {
                    <FirewallInfo businessA={businessA} id={id}/>
                    ?
                    <RouterInfo businessA={businessA} id={id}/>
                    :
                    <SwitchInfo businessA={businessA} id={id}/>
                }
            </Menu>
            </Button>
        </div>
    );
}

export default Options;
