import './Buttonppal.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import Options from './Options';
import { getId } from '../../Pages/services/services';


// Desde aquí ya el valor empieza a ser undefined

const Buttonppal = ({ business }) => {

    const [menu, setMenu] = useState("options");
    const [id, setId] = useState('');
    // const [business, setBusiness] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchId = async () => {
            try {
                const fetchedId = await getId({ id: 1 }); // Llama a la función con un id específico
                setId(fetchedId); // Almacena el id obtenido en el estado
            } catch (error) {
                setError(error.message); // Maneja errores
            }
        };

        fetchId();
    }, [id]);
    
    // await getId();
    
    return (
        <div>
             { <>
                <form
                    action=""
                    className='menu-button'>
                    
                    <Link
                         style={{textDecoration : 'none' }}
                         to='/buttonppal/{id}'
                    >
                        

                <Button
                    variant='contained' >
                    
                    <p>MICROSYSCOM</p>

                </Button>

                <Options
                        business={business}
                        id={id}
                        className='options_link'
                        />

            </Link>

            <section>

                <Link
                    style={{textDecoration: 'none'}}
                    to='/' >
                        
                        <h1>HOME</h1>

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