import React from 'react';
import { useState, useEffect } from 'react';
import { usePoints } from '../context/PointsContext';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

const Costs = () => {

const { setPoints } = usePoints();

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
        val14: '', });

const pointsf = {
     val1: 7, //
     val2: 7,  //
     val3: 7,  //
     val4: 7,  //
     val5: 7,  //
     val6: 7,  //
     val7: 7,  //
     val8: 7,   //
     val9: 7, //
     val10: 7, //
     val11: 7, //
     val12: 7, //
     val13: 7, //
     val14: 9, //
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

useEffect(() => {
    const total = totalPoints();
    setPoints((prevPoints) => ({
        ...prevPoints,
        firewall: total,
    })); // Actualiza los puntos en el contexto
}, [inputValue ]); // Dependencias para actualizar cuando cambie algo
   

    return (
        <div>
            <section
                className='firewall-section'
                id='firewall'>
                <h1>Costes</h1>
            </section>

            <form
                className='forms'
                action="get" >

            

            

            

            
            
            <label
                for="costs-SIEM">
                    SIEM
            </label>
            <input
                type="text"
                id='costs-siem'
                name='val6'
                placeholder='Adjuntar presupuestos del
                    despliegue e implementación de Vigia
                    Monit'
                onChange={handleInput}
                value={inputValue.val6}/>

           
            
            <label
                for="costs-copiasdeseguridad">
                    Copias de Seguridad
            </label>
            <input
                type="text"
                name="val8"
                id="costs-copiasdeseguridad"
                placeholder='Adjuntar presupuestos de las
                    copias de seguridad'
                onChange={handleInput}
                value={inputValue.val8}/>
            
            <label
                for="costs-servidoresrespaldo">
                Servidores de Respaldo
            </label>
            <input
                type="textarea"
                className='text-area'
                id='costs-servidoresrespaldo'
                name='val9'
                placeholder='Adjuntar presupuestos de 
                    servidores'/>

            <label
                for="costs-sai">
                SAI
            </label>
            <input
                type="text"
                name='val10'
                id='costs-sai'
                placeholder='Adjuntar presupuestos
                    de los SAI'
                onChange={handleInput}
                value={inputValue.val10}/>
            
            <label
                for="costs-protecinfo">
                    Protección de la información
                    DC
            </label>
            <input
                type="textarea"
                className='text-area'
                name='val11'
                id='costs-protecinfo'
                placeholder='Adjuntar presupuestos
                    de info DC / GPO'
                onChange={handleInput}
                value={inputValue.val11}/>
            
            <label
                for="costs-protecinfo">
                    Protección MFA
            </label>
            <input
                type="textarea"
                className='text-area'
                name='val12'
                id='costs-protecinfo'
                placeholder='Adjuntar presupuesto
                    de MFA'/>
            
            <label
                for="costs-controlacceso">
                    Control de acceso
            </label>
            <input
                type="textarea"
                className='text-area'
                name='val13'
                id='costs-controlacceso'
                placeholder='Adjuntar presupuesto
                    migración, RACKS, NAS'
                onChange={handleInput}
                value={inputValue.val13}/>


            </form>
        </div>
    );
}

export default Costs;
