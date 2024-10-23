import React from 'react';
import './Welcome.css';
import { useState, useEffect } from 'react';
import Buttonppal from '../ButtonPpal/Buttonppal';
// import { getUserEmail } from '../../Pages/services/services';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Options from '../ButtonPpal/Options';

// Componente Padre
// El dato de business.num1 se muestra en el Dom

const Welcome = ( ) => {

    const [ business, setBusiness ] = useState({ num1: '' });
    const [ id, setId ] = useState(1);

    

      const handleChange = ( e ) => {
          // setBusiness(target.value);
          const { name, value } = e.target;
          setBusiness(
              {
                  ...business,
                  [name]: value,
              });
   
         };
        // console.log(emailAddress, id);
        console.log(business.num1);
        

        // const businessA = business.toString();
        
        const handleSubmit = (e) => {
            e.preventDefault();
        }
        console.log(business.num1);
        
        // console.log(id);
        // const businessA = business.num1

    return (
        <div>
       <form onSubmit={handleSubmit}>
            <label htmlFor="empresa">
                <p>WRITE YOUR BUSINESS NAME</p>
                </label>
                <input
                    value={business.num1}
                    onChange={handleChange}
                    type="text"
                    placeholder='Indica el nombre de la empresa'
                    name="num1"
                    required
                />
        </form>
        {/* <p>{business.num1}</p> */}
        { 
            business.num1.length > 6 ?
        
        <Options
            business={business}
            id={id}/>

        : null
    } 
        </div>
    );
}

export default Welcome;
