import React from 'react';
import './Welcome.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
// import { yupResolver } from '@hookform/resolvers/yup';

const Welcome = () => {

      const [dominio, setDominio] = useState('');
      const [telefono, setTelefono] = useState('');
      const [mensajeError, setMensajeError] = useState('');
      const [saveCredentials, setSaveCredentials] = useState(false);
    //   emailAddress.length = 5;
      const handleChange = (e) => {
          setDominio(e.target.value);
          setTelefono(e.target.value);
        };
    
        const onSubmit = async (formData) => {
            setMensajeError('');
            try {
              const response = await fetch("http://localhost:4000/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });
        
              if (!response.ok) throw new Error("Error en la solicitud de conexión con el servidor");
              const data = await response.json();
        
              if (data.status === "error") {
                setMensajeError(mensajeError)
              } else if (data.status === "ok") {
                if (saveCredentials) {
                  localStorage.setItem("data", JSON.stringify({ dominio, telefono }));
                } else {
                  localStorage.clear();
                }
            }
            toast.success('Cliente validado exitosamente');
            window.location.href = "/contacto"
              
            } catch (error) {
              setMensajeError('Ha ocurrido un error. Por favor verifique todos los datos');
            }
          };

    //    Introducir operador ternario que admita la next page si se tiene
    //    aquí el input relleno

    return (
        <div>
        {/* emailAddress = '' ? */}
        <form className="container" onSubmit={onSubmit}>
            <label htmlFor="empresa">
                Dominio
                <input
                    value={dominio}
                    onChange={handleChange}
                    type="text"
                    id='dominio'
                    placeholder='Dominio*'
                    required
                    />
                    </label>
                    <hr />
                <label htmlFor="">
                    Teléfono
                <input type="text"
                value={telefono}
                onChange={handleChange}
                id='telefono'
                required
                placeholder='Teléfono*'/>
                </label>
        </form>
        {
            dominio.length >= 5 ? 
        <Link style={{ textDecoration: 'none' }} to='/buttonppal'>
        <Button variant='contained'>
        <p>VALIDAR</p>
        </Button>
        </Link>
        :
        <p className='campobligatorio'>*Campos obligatorios*</p>
        }

        </div>
    );
}

export default Welcome;