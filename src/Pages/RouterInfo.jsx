import React from 'react';
import './PagesCSS/Pages.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { usePoints } from '../context/PointsContext';


const RouterInfo = () => {

// const business = localStorage.getItem('business');
// Actualizamos los datos y utilizamos el Contexto del Provider
const { setPoints } = usePoints();
    
const [ inputValue, setInput ] = useState({ num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
    num6: '',
    num9: ''  });
        
const [ checkboxes, setChexboxes ] =
    useState({ num7: '',
    num8: '' });
            
            
const points = {
    num1: 5, // Puntos para ISP
    num2: 5,  // Puntos para Teléfono asociado
    num3: 6,  // Puntos para IP Estática
    num4: 8,  // Puntos para ISP de Backup
    num5: 8,  // Puntos para Teléfono de Backup
    num6: 8,  // Puntos para IP Estática de Backup
    num7: 5,  // Puntos para IP estática
    num8: 50,   // Puntos Fibra Backup
    num9: 5
    
    // Total 100
};
            
            
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
    const total = totalPoints();
    setPoints((prevPoints) => ({
        ...prevPoints,
        router: total,
    })); // Actualiza los puntos en el contexto
}, [inputValue, checkboxes]); // Dependencias para actualizar cuando cambie algo
            
            
            
return (
        <div >
            <section
                className="category-card" id="router">
                <h1>Router</h1>
                </section>
                <form action="get"
                    className='forms'>
                    <label
                        for="router-isp"
                        value={inputValue.num1}
                        onChange={handleInput}
                        >ISP
                        <br />
                    <select
                        name='num1'
                        className='desplegable'
                         >
                        <option >Select one of the Options</option>
                        <option value="adamo" >Adamo</option>
                        <option value="amena" >Amena</option>
                        <option value="euskatel" >Euskaltel</option>
                        <option value="jazztel" >Jazztel</option>
                        <option value="masmovil" >Masmovil</option>
                        <option value="movistar" >Movistar</option>
                        <option value="vodafone" >Vodafone</option>
                        <option value="ono" >Ono</option>
                        <option value="orange" >Orange</option>
                        <option value="rcable" >Rcable</option>
                        <option value="yoigo" >Yoigo</option>
                        <option value="voztelecom" >Voztelecom</option>
                        <option value="lebara" >Lebara</option>
                        <option value="lcr" >LCR</option>
                        <option value="lowi">Lowi</option>
                        <option value="digi" >Digi</option>
                        <option value="lyca" >Lyca</option>
                    </select>
                    </label>

                    <input
                        type="text"
                        name="num4"
                        onChange={handleInput}
                        placeholder='ISP de Backup'
                        value={inputValue.num4}/>

                    {/* <input
                        type="text"
                        id="router-isp"
                        name="num1"
                        
                        placeholder='ISP'
                        value={inputValue.num1}
                         /> */}

                    <label for="router-telefono">
                        Teléfono asociado</label>

                    <input
                        type="text"
                        id="router-telefono"
                        name="num2"
                        onChange={handleInput}
                        placeholder='Teléfono asociado'
                        value={inputValue.num2}/>
                    
                    <label for="backup-telefono">
                        Teléfono de Backup</label>
                    
                    <input
                        type="text"
                        id="backup-telefono"
                        name="num5"
                        onChange={handleInput}
                        placeholder='Teléfono de Backup'
                        value={inputValue.num5}/>

                    <label for="router-ip">
                        IP Estática</label>

                    <input
                        type="text"
                        id="router-ip"
                        name="num3"
                        onChange={handleInput}
                        placeholder='IP Estática'
                        value={inputValue.num3}/>
                    
                    <label for="backup-ip">
                        IP Estática de Backup</label>

                    <input
                        type="text"
                        id="backup-ip"
                        name="num6"
                        onChange={handleInput}
                        placeholder='IP Estática de Backup'
                        value={inputValue.num6}/>
                
                    <label
                        for="fibra-backup">
                        <input
                                type="checkbox"
                                name="num8"
                                onclick="toggleBackupFields()"
                                checked={ checkboxes.num2 }
                                onChange={handleCheckbox}/>
                                Fibra Backup
                    </label>

                        <br />
                    <label
                        for="costs-routers">
                            <b>COSTES</b>
                    </label>
                    <input
                        type="textarea"
                        className='text-area'
                        name="val9"
                        id="costs-routers"
                        placeholder='Adjuntar presupuestos
                            de los routers de backup'
                        onChange={handleInput}
                        value={inputValue.val9}/>

            </form>

            <section>
            </section>
           
           <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/firewallinfo`} > 

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

export default RouterInfo;
