import './PagesCSS/Pages.css';
import { React , useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { usePoints } from '../context/PointsContext';
import Navbar from '../Components/Navbar/Navbar';

const SwitchInfo = ( ) => {

    // const { points } = usePoints();
    const { setPoints } = usePoints();

    // Está reventando en la lectura de "name" en la arrow function / función manejadora

     const [ inputValue, setInput ]
        = useState({
            val1: '',
            val2: '',
            val3: '', });

    const [ checkboxes, setChexboxes ]
        = useState({
            val4: '',
            val5: '',
            val6: '',
            val7: '',
            val8: '',
            val9: ''
         });


       const pointsf = {
        val1: 9, //
        val2: 9,  //
        val3: 9,  //
        val4: 9,  //
        val5: 9,  //
        val6: 9,  //
        val7: 9,  //
        val8: 9,  //
        val9: 10  //

        // Total 100
    };


    const handleInput = (e) => {
        // e.preventDefault;
        const { name, value } = e.target;
        setInput({
            ...inputValue,
            [name]: value,
        });
    }

    console.log(inputValue.name);

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setChexboxes({
            ...checkboxes,
            [name]: checked,
        });
    }

    console.log(checkboxes.name);


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

    const calculateCheckboxPoints = () => {
        let totalPoints = 0;

        // Sumar puntos de los checkboxes
        Object.keys(checkboxes).forEach((key) => {
            if (checkboxes[key]) {
                totalPoints += pointsf[key]; // Sumar puntos si el checkbox está activo
            }
        });

        return totalPoints;
    };

    const totalPoints = () => {
        return calculateInputPoints() + calculateCheckboxPoints();
    };

    console.log(inputValue.name);

    useEffect(() => {
        const total = totalPoints();
        setPoints((prevPoints) => ({
            ...prevPoints,
            switch: total,
        })); // Actualiza los puntos en el contexto
    }, [inputValue, checkboxes]); // Dependencias para actualizar cuando cambie algo
    

    console.log(totalPoints());

    return (
        <div >
            {/* <Navbar /> */}
            <section
                class="category-card"
                id="switch">
                <h2>Switch</h2>
            </section>

                <form action="get">
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
                        for="switch-modelo">
                            Modelo</label>
                    <input
                        type="text"
                        name="val2"
                        onChange={handleInput}
                        placeholder='Modelo'
                        value={inputValue.val2} />
                
                    <label
                        for="switch-notas">
                            Notas</label>
                    <textarea
                        name="val3"
                        onChange={handleInput}
                        placeholder='Apunta tus Notas aquí'
                        value={inputValue.val3} />

                    <label htmlFor="">                       
                        <input
                            type="checkbox"
                            name="val4"
                            onChange={handleCheckbox}
                            value={checkboxes.val4} />
                        Licencia
                        </label>
                        <br />
                        
                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="val5"
                            onChange={handleCheckbox}
                            value={checkboxes.val5} />
                        Anti-storm
                        </label>
                        <br />

                        <label htmlFor="">                    
                        <input
                            type="checkbox"
                            name="val6"
                            onChange={handleCheckbox}
                            value={checkboxes.val6} />
                        Segmentación por VLANs
                        </label>
                        <br />

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="val7"
                            onChange={handleCheckbox}
                            value={checkboxes.val7} />
                        Gestión aislad
                        </label>
                        <br />
                    
                        <label htmlFor="">
                        <input
                           type="checkbox"
                           name="val8"
                           onChange={handleCheckbox}
                           value={checkboxes.val8} />
                        Backup automático
                        </label>
                        <br />

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="val9"
                            onChange={handleCheckbox}
                            value={checkboxes.val9} />
                        Monitoreo del dispositivo
                        </label>
                        
                </form>
                
            <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/firewallinfo`} > 
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
            to={`/buttonppal/accespointinfo`} > 
           <Button
            variant='contained'
            className='back-button'
            style={{
                margin: '10px 20px 10px 20px'
            }}>
                    NEXT
           </Button>
           </Link>
           {/* <h1>POINTS: { totalPoints() }</h1> */}
        </div>
    );
}

export default SwitchInfo;
