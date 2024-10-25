import './PagesCSS/Pages.css';
import { React , useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { usePoints } from '../context/PointsContext';
import { getId } from './services/services';
import Navbar from '../Components/Navbar/Navbar';

const AccesPoint = () => {

    const { setPoints } = usePoints();

    // Está reventando en la lectura de "name" en la arrow function / función manejadora

     const [ inputValue, setInput ]
        = useState({
            val1: '',
            val2: '',
            val3: '',
            val4: '',
            val5: '',        
        });

   const pointsf = {
        val1: 20, //
        val2: 20,  //
        val3: 20,  //
        val4: 20,  //
        val5: 20  //

        // Total 100
    };

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

    const handleInput = (e) => {
        // e.preventDefault;
        const { name, value } = e.target;
        setInput({
            ...inputValue,
            [name]: value,
        });
    }

    console.log(inputValue.name);


    const calculateInputPoints = () => {
        let totalPoints = 0;

        // Sumar puntos de los inputs
        Object.keys(inputValue).forEach((key) => {
            if (inputValue[key]) {
                totalPoints += pointsf[key]; // Sumar puntos si hay valor en el input
            }
        });

        return totalPoints;
    };

const totalPoints = () => {
        return calculateInputPoints();
    };

    console.log(inputValue.name);

    useEffect(() => {
        const total = totalPoints();
        setPoints((prevPoints) => ({
            ...prevPoints,
            accespoint: total,
        })); // Actualiza los puntos en el contexto
    }, [inputValue]); // Dependencias para actualizar cuando cambie algo
    

    console.log(totalPoints());

    return (
        <div>
            <Navbar />
            <section
                id='acess_point'>
                    <h2>ACCES POINT</h2>
            </section>

        <form action="">
            <label
                for="switch-fabricante">
                 Fabricante
            </label>
            <input
                type="text"
                name="val1"
                onChange={handleInput}
                placeholder='Fabricante'
                value={inputValue.val1} />
            
            <label
                for="switch-fabricante">
                 Modelo
            </label>
            <input
                type="text"
                name="val2"
                onChange={handleInput}
                placeholder='Modelo'
                value={inputValue.val2} />

            <label
                for="switch-fabricante">
                    IP / Cloud Gestión
            </label>
            <input
                type="text"
                name="val3"
                onChange={handleInput}
                placeholder='IP o Cloud de Gestión'
                value={inputValue.val3} />
            
            <label
                for="switch-fabricante">
                 SSID
            </label>
            <input
                type="text"
                name="val4"
                onChange={handleInput}
                placeholder='SSID'
                value={inputValue.val4} />
            
            <label
                for="switch-fabricante">
                 Observaciones
            </label>
            <textarea
                name="val5"
                onChange={handleInput}
                placeholder='Apunta tus Observaciones'
                value={inputValue.val5} />
            
        </form>

            <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/switchinfo`} > 
            <Button
                variant='contained'
                className='back-button'
                style={{
                    margin: '10px 20px 10px 20px'
                }}>
                RETURN
           </Button>
            </Link>

           <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/printeroption`} > 
           <Button
            variant='contained'
            className='back-button'
            style={{
                margin: '10px 20px 10px 20px'
            }}>
                    PRINT REPORT
           </Button>
           </Link>

        </div>
    );
}

export default AccesPoint;
