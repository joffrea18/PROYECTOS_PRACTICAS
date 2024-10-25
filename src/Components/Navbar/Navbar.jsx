import './Navbar.css';
import logo from '../../Assets/logo.jpg';
import logo_microsyscom from '../../Assets/logo-microsyscom.jpg';
import { useEffect } from 'react';
import { getId } from '../../Pages/services/services';


const Navbar = ({ business }) => {

   // const [ emailAddress, setEmailAddress ] = useState('');

   // mirar de meter un " await getId "  para mostrar el ID en la
//    cabecera
useEffect(() => {
    const fetchData = async () => {
        try {
            await getId();           
        } catch (error) {
            return error;
        }
    };
    fetchData();
}, []);

    return (
        <div className='navbar'>
                <img 
                    id= 'img-logo'
                    src={logo} alt='logo-microsyscom' />
                <img
                    id= 'img-name-logo'
                    src={logo_microsyscom}
                    alt='name-microsyscom'
                />
        </div>
    );
}

export default Navbar;