import React from 'react';
import './PagesCSS/Pages.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { getId } from './services/services';
import { usePoints } from '../context/PointsContext';


const RouterInfo = ({ business, id }) => {

    // Actualizamos los datos y utilizamos el Contexto del Provider
    const { setPoints } = usePoints();
    
    // Repetir en cada Page 
    
    console.log(business, id);
    
    const [ inputValue, setInput ] = useState({ num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: ''  });
        
        const [ checkboxes, setChexboxes ] = useState({ num7: '',
            num8: '' });
            
            
            const points = {
                num1: 10, // Puntos para ISP
                num2: 5,  // Puntos para Teléfono asociado
                num3: 6,  // Puntos para IP Estática
                num4: 8,  // Puntos para ISP de Backup
                num5: 8,  // Puntos para Teléfono de Backup
                num6: 8,  // Puntos para IP Estática de Backup
                num7: 5,  // Puntos para IP estática
                num8: 50   // Puntos Fibra Backup
                
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
                        totalPoints += points[key]; // Sumar puntos si hay valor en el input
                    }
                });
                
                return totalPoints;
            };
            
            const calculateCheckboxPoints = () => {
                let totalPoints = 0;
                
                // Sumar puntos de los checkboxes
                Object.keys(checkboxes).forEach((key) => {
                    if (checkboxes[key]) {
                        totalPoints += points[key]; // Sumar puntos si el checkbox está activo
                    }
                });
                
                return totalPoints;
            };
            
            const totalPoints = () => {
                return calculateInputPoints() + calculateCheckboxPoints();
            };
            
            useEffect(() => {
                setPoints(totalPoints()); // Actualiza los puntos en el contexto
            }, [inputValue, checkboxes]); // Dependencias para actualizar cuando cambie algo
            
            console.log(inputValue);
            
            return (
                <div>
            <section className="category-card" id="router">
                <h2>Router</h2>
                {/* Llega OBJECT */}
                {/* {/* <p>{ id }</p> */}
                {/* <h2>{ id }</h2> */}
                </section>
                <form action="get">
                {/* <div class="input-group"> */}
                    <label for="router-isp">ISP</label>
                    <input
                        type="text"
                        id="router-isp"
                        name="num1"
                        onChange={handleInput}
                        placeholder='ISP'
                        value={inputValue.num1}
                         />

                    <label for="router-telefono">
                        Teléfono asociado</label>

                    <input
                        type="text"
                        id="router-telefono"
                        name="num2"
                        onChange={handleInput}
                        placeholder='Teléfono asociado'
                        value={inputValue.num2}/>

                    <label for="router-ip">
                        IP Estática</label>

                    <input
                        type="text"
                        id="router-ip"
                        name="num3"
                        onChange={handleInput}
                        placeholder='IP Estática'
                        value={inputValue.num3}/>

                        <label for="router-ip-estatica">
                            IP Estática</label>

                        <input
                            type="checkbox"
                            // id="router-ip-estatica"
                            name="num7"
                            checked={ checkboxes.num1 }
                            onChange={handleCheckbox}
                            /> 

                        <label for="fibra-backup">
                            Fibra Backup</label>

                        <input
                            type="checkbox"
                            name="num8"
                            onclick="toggleBackupFields()"
                            checked={ checkboxes.num2 }
                            onChange={handleCheckbox}/> 

                    <label for="backup-isp">
                        ISP de Backup</label>

                    <input
                        type="text"
                        name="num4"
                        onChange={handleInput}
                        placeholder='ISP de Backup'
                        value={inputValue.num4}/>

                    <label for="backup-telefono">
                        Teléfono de Backup</label>

                    <input
                        type="text"
                        id="backup-telefono"
                        name="num5"
                        onChange={handleInput}
                        placeholder='Teléfono de Backup'
                        value={inputValue.num5}/>

                    <label for="backup-ip">
                        IP Estática de Backup</label>

                    <input
                        type="text"
                        id="backup-ip"
                        name="num6"
                        onChange={handleInput}
                        placeholder='IP Estática de Backup'
                        value={inputValue.num6}/>
            </form>

            <section>
                <p>POINTS FROM ROUTER: 
                { totalPoints() }
                </p>
            </section>

            <Link
                style={{textDecoration : 'none' }}
                to='/' > 

            <Button
                variant='contained'
                className='back-button' >
           
           <h1
                className='back-button'>
                    RETURN
                </h1>

           </Button>
            </Link>
           
           <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/firewallinfo`} > 

           <Button
                variant='contained'
                className='next-button'>

            <h1
                className='next-button'>
                        NEXT
                        </h1>

           </Button>
           </Link>
        
        </div>
    );
}

export default RouterInfo;
