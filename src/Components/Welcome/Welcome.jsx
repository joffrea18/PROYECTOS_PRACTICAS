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

    return (
        <div>
        <form>
            <label htmlFor="email">Introduce tu dirección de dominio:</label>
                <input
                   value={emailAddress}
                   onChange={handleChange}
                  type="text"
                  id="email"
                //   required
                />
        </form>
        <Button variant='contained' className='init-button' >
        <Link style={{ textDecoration: 'none' }} to='/:id'>VALIDAR</Link>
        </Button>
        </div>
    );
}

export default Welcome;