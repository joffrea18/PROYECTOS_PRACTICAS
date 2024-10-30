import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


// El valor sigue undefined && OBJECT

const Options = () => {

    
    return (
            <div>
                <br />
                <br />
                {/* <h1>{id}</h1> */}
                {/* Esto se renderiza en el Dom correctamente */}
                {/* <p>{ business.val1 }</p> */}
                <Button 
                    style={{
                        margin: '0 20px 10px 20px'
                    }}>
                    <p style={
                        {color: 
                            'white'
                        }
                    }>
                    OPTIONS
                        </p>
                  <Menu>
                     <Link
                         to={`/buttonppal/routerinfo`}
                         >
                         <p>Router</p>
                     </Link>
                     <Link
                         to={`/buttonppal/firewallinfo`}
                         >
                         <p>Firewall</p>
                     </Link>
                     <Link
                         to={`/buttonppal/switchinfo`}
                         >
                         <p>Switch</p>
                     </Link>
                     <Link
                         to={`/buttonppal/accespointinfo`}
                         >
                         <p>AccesPoint</p>
                     </Link>
                     </Menu>
                </Button>
                </div>
    );
}

export default Options;