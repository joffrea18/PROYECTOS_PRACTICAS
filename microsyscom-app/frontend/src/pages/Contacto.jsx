import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import { usePoints } from '../context/PointsContext';
import Button from '@mui/material/Button';

function Contacto() {
  
  const { reset } = useForm();
  const [mensajeError, setMensajeError] = useState('Los campos Fecha & Hora son obligatorios');
  // const { setPoints } = usePoints();

  const [inputValue, setInput] = useState({
    companyName: "",
    businessActivity: "",
    contactPerson: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    time: "",
  });

  const points = {
    companyName: 15, // Puntos para el nombre de la empresa
    businessActivity: 10, // Puntos para la actividad comercial
    contactPerson: 10, // Puntos para la persona de contacto
    email: 15, // Puntos para el correo
    phone: 10, // Puntos para el teléfono
    department: 10, // Puntos para el departamento
    date: 15, // Puntos para la fecha
    time: 15, // Puntos para la hora
  };


  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      sessionStorage.setItem("contactForm", JSON.stringify(updatedData)); // Guardar en sessionStorage
      return updatedData;
    });
  };

  const calculateTotalPoints = () => {
    let totalPoints = 0;
    Object.keys(inputValue).forEach((key) => {
      if (inputValue[key]) {
        totalPoints += points[key]; // Sumar puntos si hay valor en el input
      }
      
    });
    return totalPoints;
  };


  const onSubmit = async (data) => {

    setMensajeError('');
    try {
      const response = await fetch("http://localhost:4000/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue), // Convertimos el objeto inputValue a JSON
      });
      
      if (!response.ok) {
        throw new Error("Error en la solicitud de conexión con el servidor ");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);

      toast.success('Datos registrados exitosamente');
      reset();
      window.location.href = "/router";
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
    <div className="form">
    <h1>Contacto</h1>
    <form>
    <label>Nombre de la Empresa</label>
    <input
      type="text"
      name="companyName"
      value={inputValue.companyName}
      onChange={handleInputChange}
      placeholder="Ingresa el nombre de la empresa"
      autoComplete="off"
      
    />
    <label>Actividad Comercial</label>
    <input
      type="text"
      name="businessActivity"
      value={inputValue.businessActivity}
      onChange={handleInputChange}
      placeholder="Ingresa la actividad comercial"
      
    />
    <label>Persona que aporta la información</label>
    <input
      type="text"
      name="contactPerson"
      value={inputValue.contactPerson}
      onChange={handleInputChange}
      placeholder="Ingresa el nombre del contacto"
     
    />
    <label>Correo de Contacto</label>
    <input
      type="email"
      name="email"
      value={inputValue.email}
      onChange={handleInputChange}
      placeholder="Ingresa el correo electrónico"
      
      />
    <label>Teléfono de Contacto</label>
    <input
      type="tel"
      name="phone"
      value={inputValue.phone}
      onChange={handleInputChange}
      placeholder="Ingresa el número de teléfono"
    />
    <label>Departamento</label>
    <input
      type="text"
      name="department"
      value={inputValue.department}
      onChange={handleInputChange}
      placeholder="Ingresa el departamento"
    />
    <label>Fecha</label>
    <input
      type="date"
      name="date"
      value={inputValue.date}
      onChange={handleInputChange}
    />
    <label>Hora</label>
    <input
      type="time"
      name="time"
      value={inputValue.time}
      onChange={handleInputChange}
    />
    {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
    <p>Puntos totales: {calculateTotalPoints()}</p>
    <Button
      variant='contained'
      type="button" 
      onClick={onSubmit}
      className="btn btn-primary"
      style={{
        boxShadow: '10px 5px 5px black'
      }}>
    NEXT Router
   </Button>
  </form>
    </div>
  );
}

export default Contacto;
