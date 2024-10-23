import './Navbar.css';
import logo from '../../Assets/logo.jpg';
import { useEffect } from 'react';
import { getId } from '../../Pages/services/services';


const Navbar = ({ business, id }) => {

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
            {
                business ?
                <>
                <h1>
                    {business}
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