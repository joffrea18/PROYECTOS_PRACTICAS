import React, { useState } from 'react';
import './Buttonppal.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import FirewallInfo from '../../Pages/FirewallInfo';
import RouterInfo from '../../Pages/RouterInfo';
import SwitchInfo from '../../Pages/SwitchInfo';
import { Button } from '@mui/material';

const Options = ({ emailAddress }) => {

    const [menu, setMenu] = useState("options");

    return (
        <div>
            <Button >
                OPTIONS
             <Menu>
                {
                    <FirewallInfo emailAddress={emailAddress} />
                    ?
                    <RouterInfo emailAddress={emailAddress} />
                    :
                    <SwitchInfo emailAddress={emailAddress} />
                }
            </Menu>
            </Button>
        </div>
    );
}

export default Options;
