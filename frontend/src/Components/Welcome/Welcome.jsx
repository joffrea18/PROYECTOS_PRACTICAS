import React, { useState } from 'react';
import './Welcome.css';
import Options from '../Options/Options';
import { Button } from '@mui/material';

const Welcome = ({entry,setEntry}) => {

const [isMenuOpen, setIsMenuOpen] = useState(true);
const [business, setBusiness] = useState({'business': entry});
const empresa = JSON.stringify(business);
localStorage.setItem('business', empresa);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

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
       
        <header >
        <p className='welcome'>
        ¡ WELCOME !
        </p>
        </header>
        <br />
        <br />

       <form
        onSubmit={ handleSubmit }>
        <input
            className='init_input'
            value={entry}
            onChange={handleChange}
            type="text"
            placeholder='Indica el nombre de la empresa'
            name="business"
            required
        />
        <label>
        <input
            className='init_input'
            value={entry}
            onChange={handleChange}
            type="text"
            placeholder='Indica el número de teléfono'
            name="telefono"
            required
        />
        </label>
    </form>
    <Button 
    variant='contained'
    id='next-button'
    style={{
        boxShadow: '10px 5px 5px black'
    }}>
        comenzar
    </ Button>

    <section>
        <Options
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}/>
    </section>

    </div>
    );
}

export default Welcome;
