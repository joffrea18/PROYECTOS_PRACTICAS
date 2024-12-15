import React, { useEffect, useState } from 'react';
// import './PagesCSS/Pages.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { usePoints } from '../context/PointsContext';


const XDR = () => {

// const business = localStorage.getItem('business');
const { setPoints } = usePoints();

const [ inputValue, setInput ]
        = useState({
        val1: '',
        val2: '',
        val3: '',
        });

const [ checkboxes, setCheckboxes ]
    = useState({
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
    val19: '',
    val20: '',
    val21: '',
    val22: '',
    val23: '',
    val24: '',
    val25: '',
    val26: '',
    val27: '',
    val28: '',
    val29: '',
    val30: '',
    });

const pointsf = {
    val1: 3.4,
    val2: 3.4,
    val3: 3.4,
    val4: 3.4,
    val5: 3.4,
    val6: 3.4,
    val7: 3.4,
    val8: 3.4,
    val9: 3.4,
    val10: 3.4,
    val11: 3.4,
    val12: 3.4,
    val13: 3.4,
    val14: 3.4,
    val15: 3.4,
    val16: 3.4,
    val17: 3.4,
    val18: 3.4,
    val19: 3.4,
    val20: 3.4,
    val21: 3.4,
    val22: 3.4,
    val23: 3.4,
    val24: 3.4,
    val25: 3.4,
    val26: 3.4,
    val27: 3.4,
    val28: 3.4,
    val29: 2.4,
    val30: 2.4,   
};

console.log(pointsf);

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
    setCheckboxes({
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
        xdr: total,
    })); // Actualiza los puntos en el contexto
}, [inputValue, checkboxes]); // Dependencias para actualizar cuando cambie algo
 
console.log(totalPoints());


    return (
        <div>
            <br />
            <br />
            <section class="category">
                {/* <h2
                    className='business'>
                        {business}</h2> */}
                 <h1>XDR</h1>
            </section>
            <br />
            <br />

            <form action="get"
                className='forms'>

                <label
                    for="xdr-solucion">
                    Solución XDR
                </label>
                <input
                    type="text"
                    id="xdr-solucion"
                    name="val1"
                    placeholder='Indica solución XDR'
                    onChange={handleInput}
                    value={inputValue.val1}/>

                <label
                    for="xdr-proveedor">
                    Proveedor
                </label>
                <input
                    type="text"
                    id="xdr-proveedor"
                    name="val2"
                    placeholder='Proveedor'
                    onChange={handleInput}
                    value={inputValue.val2}/>
                
                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val7"
                    onChange={handleCheckbox}
                    value={checkboxes.val7}/>
                    Firewall
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val4"
                    onChange={handleCheckbox}
                    value={checkboxes.val4}/>
                    Antimalware
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val9"
                    onChange={handleCheckbox}
                    value={checkboxes.val9}/>
                    Antiphishing
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val5"
                    onChange={handleCheckbox}
                    value={checkboxes.val5}/>
                    Anti-Tampering
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val18"
                    onChange={handleCheckbox}
                    value={checkboxes.val18}/>
                    APT Protection
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val27"
                    onChange={handleCheckbox}
                    value={checkboxes.val27}/>
                    Threat Hunting
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val21"
                    onChange={handleCheckbox}
                    value={checkboxes.val21}/>
                    Cifrado de Datos
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val28"
                    onChange={handleCheckbox}
                    value={checkboxes.val28}/>
                    Remote Forensics
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val16"
                    onChange={handleCheckbox}
                    value={checkboxes.val16}/>
                    Sandbox Analyzer
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val6"
                    onChange={handleCheckbox}
                    value={checkboxes.val6} />
                    Antiexploit Avanzado
                </label>

                <label htmlFor="">
                <input 
                    type="checkbox"
                    name="val8"
                    onChange={handleCheckbox}
                    value={checkboxes.val8}/>
                    Control de Contenido
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val22"
                    onChange={handleCheckbox}
                    value={checkboxes.val22}/>
                    Control de Aplicaciones
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val23"
                    onChange={handleCheckbox}
                    value={checkboxes.val23}/>
                    Control de Navegador
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val10"
                    onChange={handleCheckbox}
                    value={checkboxes.val10}/>
                    Análisis del Tráfico Web
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val11"
                    onChange={handleCheckbox}
                    value={checkboxes.val11}/>
                    Network Attack Defense
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val12"
                    onChange={handleCheckbox}
                    value={checkboxes.val12}/>
                    Usuario con Permisos
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val13"
                    onChange={handleCheckbox}
                    value={checkboxes.val13}/>
                    Control de Dispositivos
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val14"
                    onChange={handleCheckbox}
                    value={checkboxes.val14}/>
                    Advanced Threat Control
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val15"
                    onChange={handleCheckbox}
                    value={checkboxes.val15}/>
                    Administración del Riesgo
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val25"
                    onChange={handleCheckbox}
                    value={checkboxes.val25}/>
                    Análisis de Comportamiento
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val20"
                    onChange={handleCheckbox}
                    value={checkboxes.val20}/>
                    Email Protected
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val26"
                    onChange={handleCheckbox}
                    value={checkboxes.val26}/>
                    Protección Ransomware
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val29"
                    onChange={handleCheckbox}
                    value={checkboxes.val29}/>
                    Políticas de Seguridad
                </label>

                <label htmlFor="">
                <input
                    type="checkbox"
                    name="val24"
                    onChange={handleCheckbox}
                    value={checkboxes.val24}/>
                    Gestión de Parches
                </label>

                <label
                    for="cost-xdr">
                        <b>COSTES</b>
                </label>
                <textarea
                    type="textarea"
                    className='text-area'
                    id='costs-xdr'
                    name='val30'
                    placeholder='Adjuntar presupuesto
                        de Vigía Defender'
                    onChange={handleInput}
                    value={inputValue.val30}/>
                            
                <textarea
                    className='text-area'
                    name="val3"
                    placeholder='Agrega aquí tus notas'
                    onChange={handleInput}
                    value={inputValue.val3}/>

            </form>

            <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/servidoresinfo`} > 
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

export default XDR;
