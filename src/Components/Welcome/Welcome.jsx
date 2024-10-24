import React from 'react';
import './Welcome.css';
import { useState } from 'react';
import Options from '../ButtonPpal/Options';
import Navbar from '../Navbar/Navbar';

// Componente Padre
// El dato de business.num1 se muestra en el Dom

const Welcome = ( ) => {

    const [ business, setBusiness ] = useState({ val1: '' });
    const [ id, setId ] = useState(1);


      const handleChange = ( e ) => {
          // setBusiness(target.value);
          e.preventDefault();
          const { name, value } = e.target;
          setBusiness((prevBusiness) => (
              {
                ...prevBusiness,
                  [name]: value,
              }));
   
         };
        // console.log(emailAddress, id);
        console.log(business.val1);
        

        // const businessA = business.toString();
        
        const handleSubmit = (e) => {
            e.preventDefault();
        }
        console.log(business.val1);
        
        // console.log(id);
        // onSubmit={handleSubmit}
        // const businessA = business.num1

    return (
        <div>
            <Navbar />
            <br />
            <br />
       <form 
        onSubmit={handleSubmit}>
            <label htmlFor="empresa">
                <p>¡ WELCOME !</p>
                </label>
                <input
                    value={business.val1}
                    onChange={handleChange}
                    type="text"
                    placeholder='Indica el nombre de la empresa'
                    name="val1"
                    required
                />
        </form>
        {/* <p>{business.num1}</p> */}
        { 
            business.val1.length > 6 ? (
        
        <Options
            business={business}
            id={id}
            />

        ) : null
    } 
        </div>
    );
}

export default Welcome;
