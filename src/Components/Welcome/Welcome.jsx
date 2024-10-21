import React from 'react';
import './Welcome.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Welcome = () => {

     const [emailAddress, setEmailAddress] = useState('');
     const handleChange = (e) => {
         setEmailAddress(e.target.value);
       };

       if (emailAddress === 0){
        return <e className="through"></e>
       }

    //    Introducir operador ternario que admita la next page si se tiene
    //    aquí el input relleno

    return (
        <div>
        {/* emailAddress = '' ? */}
        <form>
            <label htmlFor="empresa">
                <p>Introduce el nombre de empresa</p>
                </label>
                <input
                    value={emailAddress}
                    onChange={handleChange}
                    type="text"
                    id="empresa"
                    required
                />
        </form>
        <Link style={{ textDecoration: 'none' }} to='/buttonppal'>
        <Button variant='contained'  >
        <p>VALIDAR</p>
        </Button>
        </Link>
        {/* : */}

        </div>
    );
}

export default Welcome;