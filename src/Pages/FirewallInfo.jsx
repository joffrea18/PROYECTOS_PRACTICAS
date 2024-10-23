import React from 'react';
import './PagesCSS/Pages.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { getId } from './services/services';
import { usePoints } from '../context/PointsContext';

const FirewallInfo = ({ business, id }) => {
    
    const { points } = usePoints();
    
    // Este es el bloque de lógica a aplicar en este componente (ADAPTAR)
    // Está reventando en la lectura de "name" en la arrow function / función manejadora

     const [ inputValue, setInput ]
        = useState({
            val1: '',
            val2: '', });

    const [ checkboxes, setChexboxes ]
        = useState({
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
        const { name, value } = e.target;
        setInput({
            ...inputValue,
            [name]: value,
        });
    }

    console.log(handleInput(toString(inputValue)));
    
    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setChexboxes({
            ...checkboxes,
            [name]: checked,
        });
    }

    console.log(handleCheckbox());
    

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

    console.log(inputValue);



    return (
        <div>
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
                    <input
                        type="checkbox"
                        name="val3"
                        value={checkboxes.val3}
                        onChange={handleCheckbox}
                    /> Licencia

                    <input
                        type="checkbox"
                        name="val4"
                        value={checkboxes.val4}
                        onChange={handleCheckbox}
                        /> Acceso limitado a la UI desde una IP del exterior

                    <input
                        type="checkbox"
                        name="val5"
                        value={checkboxes.val5}
                        onChange={handleCheckbox}
                        /> Acceso limitado a la UI desde un puerto de gestión desde el interior

                    <input
                        type="checkbox"
                        name="val6"
                        value={checkboxes.val6}
                        onChange={handleCheckbox}
                        /> Sistema de alertas de inicio de sesión

                    <input
                        type="checkbox"
                        name="val7"
                        value={checkboxes.val7}
                        onChange={handleCheckbox}
                        /> VPN bajo protocolo seguro y con MFA

                    <input
                        type="checkbox"
                        name="val8"
                        value={checkboxes.val8}
                        onChange={handleCheckbox}
                        /> Servicios Anti-Malware

                    <input
                        type="checkbox"
                        name="val9"
                        value={checkboxes.val9}
                        onChange={handleCheckbox}
                        /> Filtros de reputación

                    <input
                        type="checkbox"
                        name="val9"
                        value={checkboxes.val9}
                        onChange={handleCheckbox}
                        /> IPS

                    <input
                        type="checkbox"
                        name="val10"
                        value={checkboxes.val10}
                        onChange={handleCheckbox}
                        /> SandBoxing

                    <input
                        type="checkbox"
                        name="val11"
                        value={checkboxes.val11}
                        onChange={handleCheckbox}
                        /> Email Security

                    <input
                        type="checkbox"
                        name="val12"
                        value={checkboxes.val12}
                        onChange={handleCheckbox}
                        /> Collaborative Detection and Response

                    <input
                        type="checkbox"
                        name="val13"
                        value={checkboxes.val13}
                        onChange={handleCheckbox}
                        /> SSL Inspection

                    <input
                        type="checkbox"
                        name="val14"
                        value={checkboxes.val14}
                        onChange={handleCheckbox}
                        /> Segmentación por VLANs

                    <input
                        type="checkbox"
                        name="val15"
                        value={checkboxes.val15}
                        onChange={handleCheckbox}
                        /> Certificado confiable

                    <input
                        type="checkbox"
                        name="val16"
                        value={checkboxes.val16}
                        onChange={handleCheckbox}
                        /> Backup automático de frecuencia ≤ 1 semana

                    <input
                        type="checkbox"
                        name="val17"
                        value={checkboxes.val17}
                        onChange={handleCheckbox}
                        /> Monitoreo del dispositivo

                    <input
                        type="checkbox" 
                        name="val18"
                        value={checkboxes.val18}
                        onChange={handleCheckbox}
                        />Acceso Limitado Geograficamente a la VPN
                </form>
            
           <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/routerinfo`} > 
            
            <Button
                variant='contained'
                className='back-button' >

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
                className='next-button'>

            <h1
                className='next-button'>
                    NEXT</h1>

           </Button>
           </Link>
           <h1>POINTS: {pointsf}</h1>
        </div>
    );
}

export default FirewallInfo;
