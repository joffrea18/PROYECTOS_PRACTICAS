import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AccesPoint = () => {

    const { reset } = useForm();
    const [mensajeError, setMensajeError] = useState('');     

    const [ inputValue, setInput ] = useState({
    fabricante: '',
    modelo: '',
    apuntes: '',
    costes: '', });

    const [ checkboxes, setCheckboxes ]
    = useState({
        gestion_aislada: false,
        ssid_oculto: false,
        wpa3_wpa2: false,
        authent_radius: false,
        segment_reclocales: false,
        wps_wep_wpa: false,
        desact_ssid: false,
        cert_eap_tls: false,
        control_mac: false,
        wifi_invitados: false,
        acces_vpnlocal: false,
        implementacion_wips: false,
        monitoreo_dispo: false,
    })

   const points = {
        fabricante: 5, //
        modelo: 6,  //
        gestion_aislada: 6,  //
        ssid_oculto: 6,  //
        apuntes: 6,  //
        wpa3_wpa2: 6,
        authent_radius: 6,
        segment_reclocales: 6,
        wps_wep_wpa: 6,
        desact_ssid: 6,
        cert_eap_tls: 6,
        control_mac: 6,
        wifi_invitados: 6,
        acces_vpnlocal: 6,
        implementacion_wips: 6,
        monitoreo_dispo: 6,
        costes: 5
        // Total 100
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((inputValue) => {
          const updatedData = {...inputValue,[name]: value};
      
          (
            () => {
              const sumPoints = points;
              const localPoints = JSON.stringify(sumPoints);
              localStorage.setItem('points', localPoints);
            }
          )()
      
          return updatedData;
        });
      }

      const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setCheckboxes((checkboxes) => {
          const updatedData = {...checkboxes,[name]: checked};
      
          (
            () => {
              const sumPoints = points;
              const localPoints = JSON.stringify(sumPoints);
              localStorage.setItem('points', localPoints);
            }
          )()
      
          return updatedData;
        });
      }
    console.log(inputValue.name);


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

  
function puntitos () {
  const storedPoints = JSON.parse(localStorage.getItem('points')) || {}; 
  return Object.values(storedPoints).reduce((acc, val) => acc + val, 0);
}
  
//   console.log(puntitos());
  
              
  const totalPoints = () => {
    return calculateInputPoints() + calculateCheckboxPoints();
  };

console.log(totalPoints());


const onSubmit = async (event) => {
    event.preventDefault();
    setMensajeError('');
    try {
      const response = await fetch("http://localhost:4000/accesspoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
        {...inputValue}), 
      });
  
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);

      toast.success('Cliente registrado exitosamente');
      reset();
      window.location.href = "/xdr";
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      if (error.response && error.response?.status === 409) {
        console.error('Error del servidor:', error.response.data);
        toast.error(error.response?.data?.error);
      } else {
        setMensajeError('Ha ocurrido un error.');
      }
    }
  };


    return (
        <div className="accesspoint">
    <form
      className='form'
      action='post'  >
        <h1>Acces Point</h1>
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
            value={inputValue.fabricante} />
        <label
            for="accespoint-modelo">
     Modelo
        </label>
        <input
            type="text"
            id='accespoint-modelo'
            name="modelo"
            onChange={handleInput}
            placeholder='Modelo'
            value={inputValue.modelo} />
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="gestion_aislada"
            onChange={handleCheckbox}
            placeholder='IP o Cloud de Gestión'
            value={checkboxes.gestion_aislada} />
        Gestión aislada
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="control_mac"
            onChange={handleCheckbox}
            value={checkboxes.control_mac} />
        Control de MAC
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="ssid_oculto"
            onChange={handleCheckbox}
            value={checkboxes.ssid_oculto} />
        SSID Ocutlo
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="desact_ssid"
            onChange={handleCheckbox}
            value={checkboxes.desact_ssid} />
        Desactivar difusión SSID
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="authent_radius"
            onChange={handleCheckbox}
            value={checkboxes.authent_radius} />
        Autentificación RADIUS
        </label>
        
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="implementacion_wips"
            onChange={handleCheckbox}
            value={checkboxes.implementacion_wips} />
        Implementación de WIPS
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="monitoreo_dispo"
            onChange={handleCheckbox}
            value={checkboxes.monitoreo_dispo} />
        Monitoreo del dispositivo
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="acces_vpnlocal"
            onChange={handleCheckbox}
            value={checkboxes.acces_vpnlocal} />
        Acceso local VPN interna
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="wpa3_wpa2"
            onChange={handleCheckbox}
            value={checkboxes.wpa3_wpa2} />
        WPA3 / WPA2 - Enterprise
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="wifi_invitados"
            onChange={handleCheckbox}
            value={checkboxes.wifi_invitados} />
        Portal Cautivo / Wifi Invitados
        </label>
        
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="segment_reclocales"
            onChange={handleCheckbox}
            value={checkboxes.segment_reclocales} />
        Segmentación recursos locales
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="wps_wep_wpa"
            onChange={handleCheckbox}
            value={checkboxes.wps_wep_wpa} />
        Desactivar WPS / WEP / WPA
        </label>
        <label
            for="switch-fabricante">
        <input
            type="checkbox"
            name="cert_eap_tls"
            onChange={handleCheckbox}
            value={checkboxes.cert_eap_tls} />
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
            name='costes'
            placeholder='Adjuntar presupuesto
            de  mano de obra para la
            configuración por sede'
            onChange={handleInput}
            value={inputValue.costes}/>
        <textarea
            name="apuntes"
            className='text-area'
            onChange={handleInput}
            placeholder='Apunta tus Observaciones'
            value={inputValue.apuntes} />
        {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
        <p>Puntos AccesPoint: {totalPoints()}</p>
        <p>Puntos API: {puntitos()}</p>
       <button
        variant='contained'
        type='button'
        onClick={onSubmit}>
        NEXT XDR
       </button>
        </form>
        </div>
    );
}

export default AccesPoint;
