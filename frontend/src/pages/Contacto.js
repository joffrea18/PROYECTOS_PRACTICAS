import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Contacto() {
  
  const { reset } = useForm();
  const [mensajeError, setMensajeError] = useState('');

  const [formData, setFormData] = useState({
    companyName: "",
    businessActivity: "",
    contactPerson: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    time: "",
  });

  const schema = yup.object({
    email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
    nombre: yup.string().required('El nombre es obligatorio'),
  });
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Cargar datos desde sessionStorage al montar el componente
  useEffect(() => {
    const savedData = sessionStorage.getItem("contactoForm");
    if (savedData) {
      setFormData(JSON.parse(savedData)); // Convertir el string en un objeto
    }
  }, []);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      sessionStorage.setItem("contactoForm", JSON.stringify(updatedData)); // Guardar en sessionStorage
      return updatedData;
    });
  };

  const onSubmit = async (data) => {

    setMensajeError('');
    try {
      const response = await fetch("http://localhost:4000/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convertimos el objeto formData a JSON
      });
  
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);

      toast.success('Cliente registrado exitosamente');
      reset();
      window.location.href = "/firewall";
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
    <div className="form">
      <h1>Contacto</h1>
      <form>
        <div className="form-row">
          <label>Nombre de la Empresa</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Ingresa el nombre de la empresa"
            autoComplete="off"
            
          />
        </div>

        <div className="form-row">
          <label>Actividad Comercial</label>
          <input
            type="text"
            name="businessActivity"
            value={formData.businessActivity}
            onChange={handleInputChange}
            placeholder="Ingresa la actividad comercial"
            
          />
        </div>

        <div className="form-row">
          <label>Persona que aporta la información</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
            placeholder="Ingresa el nombre del contacto"
           
          />
        </div>

        <div className="form-row">
          <label>Correo de Contacto</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Ingresa el correo electrónico"
            
          />
        </div>

        <div className="form-row">
          <label>Teléfono de Contacto</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Ingresa el número de teléfono"
          />
        </div>

        <div className="form-row">
          <label>Departamento</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Ingresa el departamento"
          />
        </div>

        <div className="form-row">
          <label>Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <label>Hora</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="button" 
          onClick={onSubmit}
          className="btn btn-primary"
        >
          Ir al Firewall
        </button>
      </form>

      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}

    </div>
  );
}

export default Contacto;
