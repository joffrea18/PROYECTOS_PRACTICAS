import { Link } from 'react-router-dom';
import React from 'react';
import './PagesCSS/Pages.css';

const NotFound = () => {
    return (
        <>
        <br />
        <br />
        <br />
            <h1>Disculpe las molestias, la página a la que intenta ingresar
                no existe o no es válida.</h1>
            <Link
                to='/'>
                RETURN</Link>
        </>
    );
}

export default NotFound;