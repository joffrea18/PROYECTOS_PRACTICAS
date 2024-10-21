import React from 'react';
import './Welcome.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Welcome = (props) => {

     const [ emailAddress, setEmailAddress ] = useState('');
     const handleChange = (target) => {
        const { name, value } = target;
         setEmailAddress({...emailAddress, name, value });
       };
       console.log(emailAddress);
       

    return (
        <div>
       <form>
            <label htmlFor="empresa">
                <p>Introduce el nombre de empresa</p>
                </label>
                <input
                    value={emailAddress}
                    onChange={handleChange}
                    type="text"
                    placeholder='Indica el nombre de la empresa'
                    name="empresa"
                    required
                />
        </form>
        { 
        emailAddress.length >= 5 ?
        <Link style={{ textDecoration: 'none' }} to='/buttonppal'>
            <Button variant='contained'  >
            <p>VALIDAR</p>
            </Button>
        </Link>
        : <p>CAMPO OBLIGATORIO</p>
    } 
        </div>
    );
}

export default Welcome;