import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
// import usePoints from '../context/PointsContext';


const XDR = () => {

const { reset } = useForm();
const [mensajeError, setMensajeError] = useState('');
// const { setPoints } = usePoints();

const [ inputValue, setInput ]
    = useState({
    solucion_xdr: '',
    proveedor: '',
    apuntes: '',
    costes: '',
    });

const [ checkboxes, setCheckboxes ]
    = useState({
    antimalware: false,
    antitampering: false,   
    antiexploit_advance: false,
    firewall: false,
    control_contenido: false,
    antiphishing: false,
    analisis_web: false,
    netw_att_def: false,
    user_authoriz: false,
    control_disp: false,
    advan_treatC: false,
    admin_risk: false,
    sandbox_analyzer: false,
    aptprotection: false,
    email_protect: false,
    cifrado_datos: false,
    control_app: false,
    control_naveg: false,
    parches: false,
    analisis_comp: false,
    ransomware: false,
    treath_hunting: false,
    remote_forensics: false,
    pol_seguridad: false,
    });

const pointsf = {
    val1: 3.4,
    val2: 3.4,
    val3: 3.4,
    antimalware: 3.4,
    antitampering: 3.4,
    antiexploit_advance: 3.4,
    firewall: 3.4,
    control_contenido: 3.4,
    antiphishing: 3.4,
    analisis_web: 3.4,
    netw_att_def: 3.4,
    user_authoriz: 3.4,
    control_disp: 3.4,
    advan_treatC: 3.4,
    admin_risk: 3.4,
    sandbox_analyzer: 3.4,
    aptprotection: 3.4,
    email_protect: 3.4,
    cifrado_datos: 3.4,
    control_app: 3.4,
    control_naveg: 3.4,
    parches: 3.4,
    analisis_comp: 3.4,
    ransomware: 3.4,
    treath_hunting: 3.4,
    remote_forensics: 3.4,
    pol_seguridad: 2.4,
    costes: 2.4,   
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

 
console.log(totalPoints());

const onSubmit = async (data) => {

    setMensajeError('');
    try {
      const response = await fetch("http://localhost:4000/xdr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...inputValue, // Combinar inputValue
          ...checkboxes  // y checkboxes en un solo objeto
        }), // Convertimos el objeto formData a JSON
      });
      
      if (!response.ok) {
        throw new Error("Error en la solicitud de conexión con el servidor ");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);

      toast.success('Datos enviados exitosamente');
      reset();
      window.location.href = "/servidores";
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      if (error.response && error.response?.status === 409) {
        console.error('Error del servidor:', error.response.data);
        toast.error(error.response?.data?.error);
      } else {
        setMensajeError('Ha ocurrido un error. Por favor cumplimente todos los datos');
      }
    }
  };

    return (
        <div>
       <form className='form'>
     <h1>XDR</h1>
        <label
            for="xdr-solucion">
        Solución XDR
        </label>
        <input
            type="text"
            id="xdr-solucion"
            name="solucion_xdr"
            placeholder='Indica solución XDR'
            onChange={handleInput}
            value={inputValue.solucion_xdr}/>
        <label
            for="xdr-proveedor">
        Proveedor
        </label>
        <input
            type="text"
            id="xdr-proveedor"
            name="proveedor"
            placeholder='Proveedor'
            onChange={handleInput}
            value={inputValue.proveedor}/>
        <label htmlFor="">
        <input
            type="checkbox"
            name="firewall"
            onChange={handleCheckbox}
            value={checkboxes.firewall}/>
        Firewall
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="antimalware"
            onChange={handleCheckbox}
            value={checkboxes.antimalware}/>
        Antimalware
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="antiphishing"
            onChange={handleCheckbox}
            value={checkboxes.antiphishing}/>
        Antiphishing
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="antitampering"
            onChange={handleCheckbox}
            value={checkboxes.antitampering}/>
        Anti-Tampering
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="aptprotection"
            onChange={handleCheckbox}
            value={checkboxes.aptprotection}/>
        APT Protection
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="treath_hunting"
            onChange={handleCheckbox}
            value={checkboxes.treath_hunting}/>
        Threat Hunting
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="cifrado_datos"
            onChange={handleCheckbox}
            value={checkboxes.cifrado_datos}/>
        Cifrado de Datos
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="remote_forensics"
            onChange={handleCheckbox}
            value={checkboxes.remote_forensics}/>
        Remote Forensics
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="sandbox_analyzer"
            onChange={handleCheckbox}
            value={checkboxes.sandbox_analyzer}/>
        Sandbox Analyzer
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="antiexploit_advance"
            onChange={handleCheckbox}
            value={checkboxes.antiexploit_advance} />
        Antiexploit Avanzado
        </label>
        <label htmlFor="">
        <input 
            type="checkbox"
            name="control_contenido"
            onChange={handleCheckbox}
            value={checkboxes.control_contenido}/>
        Control de Contenido
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="control_app"
            onChange={handleCheckbox}
            value={checkboxes.control_app}/>
        Control de Aplicaciones
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="control_naveg"
            onChange={handleCheckbox}
            value={checkboxes.control_naveg}/>
        Control de Navegador
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="analisis_web"
            onChange={handleCheckbox}
            value={checkboxes.analisis_web}/>
        Análisis del Tráfico Web
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="netw_att_def"
            onChange={handleCheckbox}
            value={checkboxes.netw_att_def}/>
        Network Attack Defense
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="user_authoriz"
            onChange={handleCheckbox}
            value={checkboxes.user_authoriz}/>
        Usuario con Permisos
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="control_disp"
            onChange={handleCheckbox}
            value={checkboxes.control_disp}/>
        Control de Dispositivos
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="advan_treatC"
            onChange={handleCheckbox}
            value={checkboxes.advan_treatC}/>
        Advanced Threat Control
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="admin_risk"
            onChange={handleCheckbox}
            value={checkboxes.admin_risk}/>
        Administración del Riesgo
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="analisis_comp"
            onChange={handleCheckbox}
            value={checkboxes.analisis_comp}/>
        Análisis de Comportamiento
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="email_protect"
            onChange={handleCheckbox}
            value={checkboxes.email_protect}/>
        Email Protected
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="ransomware"
            onChange={handleCheckbox}
            value={checkboxes.ransomware}/>
        Protección Ransomware
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="pol_seguridad"
            onChange={handleCheckbox}
            value={checkboxes.pol_seguridad}/>
        Políticas de Seguridad
        </label>
        <label htmlFor="">
        <input
            type="checkbox"
            name="parches"
            onChange={handleCheckbox}
            value={checkboxes.parches}/>
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
            name='costes'
            placeholder='Adjuntar presupuesto
            de Vigía Defender'
            onChange={handleInput}
            value={inputValue.costes}/>            
        <textarea
            className='text-area'
            name="apuntes"
            placeholder='Agrega aquí tus notas'
            onChange={handleInput}
            value={inputValue.apuntes}/>
       {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
    <p>Puntos totales: {totalPoints()}</p>

    <Button
      variant='contained'
      type="button" 
      onClick={onSubmit}
      className="btn btn-primary"
      style={{
        boxShadow: '10px 5px 5px black'
      }}>
    NEXT Servidores
   </Button>
    </form>
    </div>
    );
}

export default XDR;
