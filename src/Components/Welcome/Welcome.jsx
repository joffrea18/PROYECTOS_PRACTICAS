import React, { useState } from 'react';
import './Welcome.css';
import Options from '../ButtonPpal/Options';
import Navbar from '../Navbar/Navbar';
import RouterInfo from '../../Pages/RouterInfo';

// Componente Padre
// El dato de business.num1 se muestra en el Dom

const Welcome = ({ setEntry }) => {

const [business, setBusiness] = useState('');

const handleChange = ( e ) => {
  setBusiness(e.target.value);
};

const handleSubmit = ( e ) => {
    e.preventDefault()
    setEntry([business])
}

    return (
        
        <div>
            
            {/* <Navbar />
            <br />
            <br /> */}
           
       <form
        onSubmit={ handleSubmit }>
            <label htmlFor="empresa">
                <p>¡ WELCOME !</p>
                </label>
                <input
                    value={business}
                    onChange={handleChange}
                    type="text"
                    placeholder='Indica el nombre de la empresa'
                    name="val1"
                    required
                />
        </form>
        { 
         business.length > 5  ? <Options setEntry={setEntry}/> : null

    } 
        </div>
    );
}

export default Welcome;
