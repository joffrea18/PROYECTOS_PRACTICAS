import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
    return (
        <>
        <br />
        <br />
        <br />
            <h1>Disculpe las molestias, la página a la que intenta ingresar
                no existe o no es válida.</h1>
            <Link
                to='/'
                style={{
                    margin: '0 20px 10px 20px'
                }}>
                RETURN</Link>
        </>
    );
}

export default NotFound;