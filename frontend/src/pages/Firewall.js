import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


function Firewall() {
  const { reset } = useForm();
  const [mensajeError, setMensajeError] = useState('');
  const [inputVal, setInputValue] = useState("");
  
  const [ inputValue, setInput ]
  = useState({
      val1: '',
      val2: '', });

const [ checkboxes, setCheckboxes ]
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

  //  // Estado para manejar el valor del input
  // Cargar el valor desde Session Storage cuando el componente se monta
  useEffect(() => {
    const storedValue = sessionStorage.getItem("firewallForm"); // Obtener el valor de 'contactInput'
    if (storedValue) {
      setInputValue(storedValue); // Actualizar el estado si el valor existe
    }
  }, []);

  // Manejar cambios en el input
  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value); // Actualizar el estado
    sessionStorage.setItem("firewallForm", value); // Guardar el valor nuevamente en Session Storage
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({
        ...checkboxes,
        [name]: checked,
    })

  const onSubmit = async (data) => {

    setMensajeError('');
    try {
      const response = await fetch("http://localhost:4000/firewall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue, checkboxes), // Convertimos el objeto formData a JSON
      });
  
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);

      toast.success('Cliente registrado exitosamente');
      reset();
      window.location.href = "/switchs";
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
    <div className="firewall">
      <h1>Firewall</h1>

      <form
                className='forms'
                action='get'  >

                <label
                    for="firewall-fabricante">
                        Fabricante
                </label>
                <input
                    type="text"
                    id='firewall-fabricante'
                    name="val1"
                    onChange={handleInput}
                    placeholder='Fabricante'
                    value={inputValue.val1}/>

                    <label
                        for="firewall-modelo">
                            Modelo
                    </label>
                    <input
                        type="text"
                        id='firewall-modelo'
                        name="val2"
                        placeholder='Modelo'
                        onChange={handleInput}
                        value={inputValue.val2}/>
                    <br/>

                    {/* LICENCIA prela los demás checkboxes */}
                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val9"
                        value={checkboxes.val9}
                        onChange={handleCheckbox}
                        /> IPS
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val3"
                        value={checkboxes.val3}
                        onChange={handleCheckbox}
                    /> Licencia
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val10"
                        value={checkboxes.val10}
                        onChange={handleCheckbox}
                        /> SandBoxing
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val11"
                        value={checkboxes.val11}
                        onChange={handleCheckbox}
                        /> Email Security
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val13"
                        value={checkboxes.val13}
                        onChange={handleCheckbox}
                        /> SSL Inspection
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val6"
                        value={checkboxes.val6}
                        onChange={handleCheckbox}
                        /> Sistema de alertas Login
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val8"
                        value={checkboxes.val8}
                        onChange={handleCheckbox}
                        /> Servicios Anti-Malware
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val9"
                        value={checkboxes.val9}
                        onChange={handleCheckbox}
                        /> Filtros de reputación
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val12"
                        value={checkboxes.val12}
                        onChange={handleCheckbox}
                        /> Detection & Response
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val15"
                        value={checkboxes.val15}
                        onChange={handleCheckbox}
                        /> Certificado confiable
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val17"
                        value={checkboxes.val17}
                        onChange={handleCheckbox}
                        /> Monitoreo del dispositivo
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val14"
                        value={checkboxes.val14}
                        onChange={handleCheckbox}
                        /> Segmentación por VLANs
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val4"
                        value={checkboxes.val4}
                        onChange={handleCheckbox}
                        /> Acceso UI desde IP exterior
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val5"
                        value={checkboxes.val5}
                        onChange={handleCheckbox}
                        /> Acceso UI desde puerto interior
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val7"
                        value={checkboxes.val7}
                        onChange={handleCheckbox}
                        /> VPN protocolo seguro & MFA
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val16"
                        value={checkboxes.val16}
                        onChange={handleCheckbox}
                        /> Backup automático ≤ 1 semana
                    </label>

                    <label htmlFor="">
                    <input
                        type="checkbox"
                        name="val18"
                        value={checkboxes.val18}
                        onChange={handleCheckbox}
                        /> VPN - Limitado Geograficamente
                    </label>

                    <label 
                        for="costs-firewall">
                            <b>COSTES</b>
                    </label>
                    <input
                        type="text"
                        id='costs-firewall'
                        name="val19"
                        onChange={handleInput}
                        placeholder='Adjuntar
                            presupuestos de los
                                Firewalls'
                        value={inputValue.val19} />
            </form>
      <input
        type="text"
        value={inputValue} // Mostrar el valor obtenido de Session Storage
        onChange={handleInput} // Actualizar estado y Session Storage al escribir
      />

      <button
          type="button" 
          onClick={onSubmit}
          className="btn btn-primary"
        >
          Ir al Firewall
        </button>

    {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
    </div>
  );
}
}

export default Firewall;
