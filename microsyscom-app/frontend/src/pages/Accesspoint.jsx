// import './PagesCSS/Pages.css';
import { React , useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { usePoints } from '../context/PointsContext';

const AccesPoint = () => {

    const business = localStorage.getItem('business');
    const { setPoints } = usePoints();

    // Está reventando en la lectura de "name" en la arrow function / función manejadora

     const [ inputValue, setInput ]
        = useState({
            val1: '',
            val2: '',
            val3: '',
            val4: '',
            val5: '',
            val6: '',
            val7: '',
            val8: '',
            val9: '',
            val10: '',
            val11: '',
            val12: '',
            val13: '',
            val14: '',
            val15: '',
            val16: '',
            val17: ''         
        });

   const pointsf = {
        val1: 5, //
        val2: 6,  //
        val3: 6,  //
        val4: 6,  //
        val5: 6,  //
        val6: 6,
        val7: 6,
        val8: 6,
        val9: 6,
        val10: 6,
        val11: 6,
        val12: 6,
        val13: 6,
        val14: 6,
        val15: 6,
        val16: 6,
        val17: 5

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
            <br />
            <br />
            <section
                id='acess_point'>
                    {/* <h2
                        className='business'>
                            {business}</h2> */}
                    <h1>ACCES POINT</h1>
            </section>
            <br />
            <br />
        <form action="">
            <label
                for="accespoint-fabricante">
                 Fabricante
            </label>
            <input
                type="text"
                id='accespoint-fabricante'
                name="val1"
                onChange={handleInput}
                placeholder='Fabricante'
                value={inputValue.val1} />
            
            <label
                for="accespoint-modelo">
                 Modelo
            </label>
            <input
                type="text"
                id='accespoint-modelo'
                name="val2"
                onChange={handleInput}
                placeholder='Modelo'
                value={inputValue.val2} />

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val3"
                onChange={handleInput}
                placeholder='IP o Cloud de Gestión'
                value={inputValue.val3} />
                Gestión aislada
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val12"
                onChange={handleInput}
                value={inputValue.val12} />
                Control de MAC
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val4"
                onChange={handleInput}
                value={inputValue.val4} />
                SSID Ocutlo
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val10"
                onChange={handleInput}
                value={inputValue.val10} />
                Desactivar difusión SSID
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val7"
                onChange={handleInput}
                value={inputValue.val7} />
                Autentificación RADIUS
            </label>
            
            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val15"
                onChange={handleInput}
                value={inputValue.val15} />
                Implementación de WIPS
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val16"
                onChange={handleInput}
                value={inputValue.val16} />
                Monitoreo del dispositivo
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val14"
                onChange={handleInput}
                value={inputValue.val14} />
                Acceso local VPN interna
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val6"
                onChange={handleInput}
                value={inputValue.val6} />
                WPA3 / WPA2 - Enterprise
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val13"
                onChange={handleInput}
                value={inputValue.val13} />
                Portal Cautivo / Wifi Invitados
            </label>
            
            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val8"
                onChange={handleInput}
                value={inputValue.val8} />
                Segmentación recursos locales
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val9"
                onChange={handleInput}
                value={inputValue.val9} />
                Desactivar WPS / WEP / WPA
            </label>

            <label
                for="switch-fabricante">
            <input
                type="checkbox"
                name="val11"
                onChange={handleInput}
                value={inputValue.val11} />
                Certificado Autenticación EAP-TLS
            </label>
            <br />
            <label
                for="costs-accespoint">
                    <b>COSTES</b>
            </label>
            <textarea
                type="textarea"
                className='text-area'
                id='costs-accespoint'
                name='val17'
                placeholder='Adjuntar presupuesto
                    de  mano de obra para la
                        configuración por sede'
                onChange={handleInput}
                value={inputValue.val17}/>

            <textarea
                name="val5"
                className='text-area'
                onChange={handleInput}
                placeholder='Apunta tus Observaciones'
                value={inputValue.val5} />

        </form>

           <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/xdr`} > 
           <Button
            variant='contained'
            id='next-button'
            style={{
                boxShadow: '10px 5px 5px black'
            }}>
                    NEXT
           </Button>
           </Link>

        </div>
    );
}

export default AccesPoint;
