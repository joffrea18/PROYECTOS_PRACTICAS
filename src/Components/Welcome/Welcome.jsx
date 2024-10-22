import React from 'react';
import './Welcome.css';
import { useState, useEffect } from 'react';
import Buttonppal from '../ButtonPpal/Buttonppal';
// import { getUserEmail } from '../../Pages/services/services';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// Componente Padre


const Welcome = () => {

    // Arranco mi localStorage con lo almcenado en la variable emailAddress que
    // debe estar vacío al arrancar.

     const [ emailAddress, setEmailAddress ] = React.useState('');
     // Dado que es solo un registro
     // dar valor de inicio 1 al id
    const [ id, setId ] = useState('');

     const handleChange = ({target}) => {
         setEmailAddress(target.value);
        };
        // console.log(emailAddress, id);
        
        // Cambiar valor de email 
        // Pasar con nuevo nombre como prop
        const email = emailAddress.toString();
        
        const handleSubmit = (e) => {
            e.preventDefault()
            // setEmailAddress(...emailAddress);
        }
        console.log(emailAddress);
        
        const clickEmail = (id) => {
            setId(id);
        }
        console.log(id);

    return (
        <div>
       <form onSubmit={handleSubmit}>
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
        emailAddress.length > 6 ?
        
        <Buttonppal emailAddress={emailAddress}/>
        : null
    } 
        </div>
    );
}

export default Welcome;


{/* Sí que se visualiza lo contenido en emailAddress */}
{/* <section>
    <p>{emailAddress}</p>
</section> */}

// <Link style={{ textDecoration: 'none' }} to='/buttonppal/{id}'>
//     <Button variant='contained' onClick={clickEmail} >
//     <p>VALIDAR</p>
//     </Button>
// </Link>