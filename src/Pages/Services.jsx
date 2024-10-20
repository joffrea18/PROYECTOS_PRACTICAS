import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Services = () => {
    return (
        <div>
            <p>THIS IS A SERVICES WEB</p>
            <Button ><Link style={{textDecoration : 'none' }} to='/'>BACK </Link> </Button>
        </div>
    );
}

export default Services;
