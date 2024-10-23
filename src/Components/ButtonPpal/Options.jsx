// import React, { useState } from 'react';
import './Buttonppal.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
// import FirewallInfo from '../../Pages/FirewallInfo';
// import RouterInfo from '../../Pages/RouterInfo';
// import SwitchInfo from '../../Pages/SwitchInfo';
import { Button } from '@mui/material';
import RouterInfo from '../../Pages/RouterInfo';
// import Navbar from '../Navbar/Navbar';
// import Welcome from '../Welcome/Welcome';

// El valor sigue undefined

const Options = ({ business, id }) => {

    // const [menu, setMenu] = useState("options");

    const businessOptions = toString(business.num1);
    // const businessOption = toString(business.num1);
    console.log(businessOptions, id);
    
    return (
            <div>
                {/* <h1>{id}</h1> */}
                {/* Esto se renderiza en el Dom correctamente */}
                {/* <p>{ business.num1 }</p> */}
                <Button >
                    <p>
                    OPTIONS
                        </p>
                  <Menu>
                     <Link
                         to={`/buttonppal/routerinfo/`}
                         >
                         <p>Router</p>
                     </Link>
                     <Link
                         to={`/buttonppal/firewallinfo/`}
                         >
                         <p>Firewall</p>
                     </Link>
                     <Link
                         to={`/buttonppal/switchinfo/`}
                         >
                         <p>Switch</p>
                     </Link>
                     </Menu>
                </Button>
                </div>
    );
}

export default Options;



                // <RouterInfo
                //     business={business}
                //     id={id} />