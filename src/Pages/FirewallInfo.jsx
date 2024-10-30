import React from 'react';
import './PagesCSS/Pages.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { usePoints } from '../context/PointsContext';
import Navbar from '../Components/Navbar/Navbar';

const FirewallInfo = () => {

const { setPoints } = usePoints();
// Está reventando en la lectura de "name" en la arrow function / función manejadora

const [ inputValue, setInput ]
    = useState({
        val1: '',
        val2: '', });

const [ checkboxes, setChexboxes ]
    = useState({
        val3: false,
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
        val17: '',
        val18: '',
        val19: ''
     });


    const pointsf = {
     val1: 3, //
     val2: 5,  //
     val3: 2,  //
     val4: 5,  //
     val5: 5,  //
     val6: 5,  //
     val7: 5,  //
     val8: 5,   //
     val9: 5, //
     val10: 5, //
     val11: 5, //
     val12: 5, //
     val13: 5, //
     val14: 5, //
     val15: 5, //
     val16: 5, //
     val17: 5, //
     val18: 5, //
     val19: 5, //
     val20: 5, //
     val21: 5 //
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


const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setChexboxes({
        ...checkboxes,
        [name]: checked,
    });
}


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

useEffect(() => {
    const total = totalPoints();
    setPoints((prevPoints) => ({
        ...prevPoints,
        firewall: total,
    })); // Actualiza los puntos en el contexto
}, [inputValue, checkboxes]); // Dependencias para actualizar cuando cambie algo
    

    return (
        <div >
            {/* <Navbar /> */}
            <section
                className='firewall-section'
                id='firewall'>
                <h2>Firewall</h2>
            </section>

            <form
                className='firewall-form'
                action='get'  >

                <label
                    for="firewall-fabricante">Fabricante</label>

                <input
                    type="text"
                    name="val1"
                    onChange={handleInput}
                    placeholder='Fabricante'
                    value={inputValue.val1}/>

                    <label
                        for="firewall-modelo">Modelo</label>

                    <input
                        type="text"
                        id="firewall-modelo"
                        name="val2"
                        placeholder='Modelo'
                        onChange={handleInput}
                        value={inputValue.val2}/>
                    <br/>

                    {/* LICENCIA prela los demás checkboxes */}
                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val3"
                        value={checkboxes.val3}
                        onChange={handleCheckbox}
                    /> Licencia
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val4"
                        value={checkboxes.val4}
                        onChange={handleCheckbox}
                        /> Acceso UI desde IP exterior
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val5"
                        value={checkboxes.val5}
                        onChange={handleCheckbox}
                        /> Acceso UI desde puerto interior
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val6"
                        value={checkboxes.val6}
                        onChange={handleCheckbox}
                        /> Sistema de alertas Login
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val7"
                        value={checkboxes.val7}
                        onChange={handleCheckbox}
                        /> VPN protocolo seguro & MFA
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val8"
                        value={checkboxes.val8}
                        onChange={handleCheckbox}
                        /> Servicios Anti-Malware
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val9"
                        value={checkboxes.val9}
                        onChange={handleCheckbox}
                        /> Filtros de reputación
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val9"
                        value={checkboxes.val9}
                        onChange={handleCheckbox}
                        /> IPS
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val10"
                        value={checkboxes.val10}
                        onChange={handleCheckbox}
                        /> SandBoxing
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val11"
                        value={checkboxes.val11}
                        onChange={handleCheckbox}
                        /> Email Security
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val12"
                        value={checkboxes.val12}
                        onChange={handleCheckbox}
                        /> Detection & Response
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val13"
                        value={checkboxes.val13}
                        onChange={handleCheckbox}
                        /> SSL Inspection
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val14"
                        value={checkboxes.val14}
                        onChange={handleCheckbox}
                        /> Segmentación por VLANs
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val15"
                        value={checkboxes.val15}
                        onChange={handleCheckbox}
                        /> Certificado confiable
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val16"
                        value={checkboxes.val16}
                        onChange={handleCheckbox}
                        /> Backup automático ≤ 1 semana
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val17"
                        value={checkboxes.val17}
                        onChange={handleCheckbox}
                        /> Monitoreo del dispositivo
                    </label>
                    <br />

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val18"
                        value={checkboxes.val18}
                        onChange={handleCheckbox}
                        /> VPN - Limitado Geograficamente
                    </label>
                </form>

           <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/routerinfo`} >

            <Button
                variant='contained'
                className='back-button'
                style={{
                    margin: '10px 20px 10px 20px'
                }} >

           <h1
            className='back-button'>
                RETURN</h1>

           </Button>
            </Link>
           <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/switchinfo`} >

           <Button
                variant='contained'
                className='next-button'
                style={{
                    margin: '10px 20px 10px 20px'
                }}>

            <h1
                className='next-button'>
                    NEXT</h1>

           </Button>
           </Link>
           {/* <h1>POINTS: {totalPoints()}</h1> */}
        </div>
    );
}

export default FirewallInfo;
