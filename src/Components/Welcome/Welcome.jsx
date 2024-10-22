import React from 'react';
import './Welcome.css';
import { useState, useEffect } from 'react';
import Buttonppal from '../ButtonPpal/Buttonppal';
// import { getUserEmail } from '../../Pages/services/services';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// Componente Padre


const Welcome = () => {

    const [ business, setBusiness ] = React.useState('');
    const [ id, setId ] = useState(1);

    

     const handleChange = ({target}) => {
         setBusiness(target.value);
         
        };
        // console.log(emailAddress, id);
        console.log(business);
        

        const businessA = business.toString();
        
        const handleSubmit = (e) => {
            e.preventDefault()
            setBusiness(...businessA);
        }
        console.log(businessA);
        
        // console.log(id);

    return (
        <div>
       <form onSubmit={handleSubmit}>
            <label htmlFor="empresa">
                <p>WRITE YOUR BUSINESS NAME</p>
                </label>
                <input
                    value={business}
                    onChange={handleChange}
                    type="text"
                    placeholder='Indica el nombre de la empresa'
                    name="empresa"
                    required
                />
        </form>
        { 
        businessA.length > 6 ?
        
        <Buttonppal
            businessA={businessA}
            id={id}/>

        : null
    } 
        </div>
    );
}

export default Welcome;
