import './Navbar.css';
import logo from '../../Assets/logo.jpg';
// import { useState } from 'react';


const Navbar = ({ businessA, id }) => {

   // const [ emailAddress, setEmailAddress ] = useState('');

    return (
        <div className='navbar'>
            {
                businessA ?
                <>
                <h1>
                    {businessA}
                </h1>
                <h1>
                    ID USER: {id}
                </h1>
                <img src={logo} alt='' /> 
                </> :
                <img src={logo} alt='' />
            }
        </div>
    );
}

export default Navbar;