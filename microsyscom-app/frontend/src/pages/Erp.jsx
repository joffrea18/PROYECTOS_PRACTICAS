import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Erp() {
  const { reset } = useForm();
  const [mensajeError, setMensajeError] = useState('');

  const [inputValue, setInput] = useState({
    fabricante: '',
    proveedor: '',
    apuntes: ''  // 🔹 Corregido: "apuntes" en lugar de "text-area"
  });

  const points = {
    fabricante: 35,
    proveedor: 35,
    apuntes: 30
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

  const calculateInputPoints = () => {
    return Object.keys(inputValue).reduce((total, key) => {
      return inputValue[key] ? total + points[key] : total;
    }, 0);
  };

  const puntitos = () => {
    const storedPoints = JSON.parse(localStorage.getItem('points')) || {};
    return Object.values(storedPoints).reduce((acc, val) => acc + val, 0);
  };

  const totalPoints = () => calculateInputPoints();

  const onSubmit = async (event) => {
    event.preventDefault();
    setMensajeError('');

    try {
      const response = await fetch("http://localhost:4000/erp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 🔹 Corregido "application/json"
        },
        body: JSON.stringify(inputValue),
      });

      if (!response.ok) {
        throw new Error("Error en la conexión con el servidor");
      }

      const data = await response.json();
      console.log("Datos recibidos correctamente en el servidor", data);
      toast.success("Datos enviados con éxito al servidor");
      reset();
      window.location.href = "/printReport";
    } catch (error) {
      console.log("Error al enviar los datos", error);
      setMensajeError(error.message);
    }
  };

  return (
    <div className='sai'>
      <form className='form'>
        <h1>ERP</h1>

        <label htmlFor="fabricante">Fabricante</label>
        <input
          type="text"
          id='erp-fabricante'
          name="fabricante"
          onChange={handleInput}
          value={inputValue.fabricante}
          placeholder='Fabricante'
        />

        <label htmlFor="proveedor">Proveedor</label>
        <input
          type="text"
          id='proveedor'
          name="proveedor"
          onChange={handleInput}
          value={inputValue.proveedor}
          placeholder='Proveedor'
        />

        <label htmlFor="apuntes">Apuntes</label>  {/* 🔹 Corregido el label */}
        <input
          type="textarea"
          id='text-area'
          name="apuntes" 
          onChange={handleInput}
          value={inputValue.apuntes}
          placeholder='Indicar apuntes referentes a Erp'
        />

        {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}

        <p>Puntos ERP: {totalPoints()}</p>
        <p>Puntos API: {puntitos()}</p>

        <button
          variant='contained'
          type="button" 
          onClick={onSubmit}
          className="btn btn-primary"
        >
          PRINT REPORT
        </button>
      </form>
    </div>
  );
}

export default Erp;
