import React, { useState } from 'react';
import './Welcome.css';
import Options from '../ButtonPpal/Options';
import Navbar from '../Navbar/Navbar';
import RouterInfo from '../../Pages/RouterInfo';

// Componente Padre
// El dato de business.num1 se muestra en el Dom

const Welcome = ({entry,setEntry}) => {

const [business, setBusiness] = useState({'business': entry});
const empresa = JSON.stringify(business);
localStorage.setItem('business', empresa);

const handleChange = ( e ) => {
  setBusiness(e.target.value);
};

const handleSubmit = ( e ) => {
    e.preventDefault()
    setEntry([business])
}

    return (
        
        <div>
            
            <br />
            <br />
            <br />
            <br />
           
       <form
        onSubmit={ handleSubmit }>
            <label htmlFor="empresa">
                <p>¡ WELCOME !</p>
                </label>
                <input
                    className='init_input'
                    value={entry}
                    onChange={handleChange}
                    type="text"
                    placeholder='Indica el nombre de la empresa'
                    name="business"
                    required
                />
        </form>
        { 
         business.length > 6  ? <Options business={business}/> : null

    } 
        </div>
    );
}

export default Welcome;
