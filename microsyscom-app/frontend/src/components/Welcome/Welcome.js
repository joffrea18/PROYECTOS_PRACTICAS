import React, { useState, useEffect }  from 'react';
import './Welcome.css';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Welcome = () => {

const { reset } = useForm('');
const [mensajeError, setMensajeError] = useState('');


const [formData, setFormData] = useState({
    name: "",
    telefono: "",
  });

  const schema = yup.object().shape({
    nombre: yup
    .string(), 
    telefono: yup
    .string(),
  });
  
  
  const { register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  
  useEffect(() => {
    const savedData = sessionStorage.getItem("welcomForm");
    if (savedData) {
      setFormData(JSON.parse(savedData)); 
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      sessionStorage.setItem("welcomForm", JSON.stringify(updatedData)); 
      return updatedData;
    });
   
  };

const onSubmit = async (data) => {

    setMensajeError('');
    try {
      const response = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });
      
      if (!response.ok) {
        throw new Error("Error en la solicitud de conexión con el servidor ");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);

      toast.success('Cliente registrado exitosamente');
      reset();
      window.location.href = "/contacto";
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      if (error.response && error.response?.status === 409) {
        console.error('Error del servidor:', error.response.data);
        toast.error(error.response?.data?.error);
      } else {
        setMensajeError('Ha ocurrido un error. Por favor verifique todos los datos');
      }
    }
  };

  return (
    <div >
    <form className="container">
    <h1>¡WELCOME!</h1>
    <section>
    <label> Nombre de la Empresa
    </label>
    <input
    type="text"
    name="nombre"
    value={formData.name}
    {...register("nombre")}
    onChange={handleInputChange}
    placeholder="Dominio / Business nombre*"
    />
   </section>
   <section>
    <input
    type="telefono"
    name="telefono"
    value={formData.telefono}
    {...register("telefono")}
    onChange={handleInputChange}
    placeholder="Teléfono*" 
    />
    </section>

    <button
    type='button'
    onClick={onSubmit}
    classnombre='btn-welcome'
    >Agregar y Continuar
    </button>
    
    {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
  </form>
    
  </div>
  );
}

export default Welcome;
