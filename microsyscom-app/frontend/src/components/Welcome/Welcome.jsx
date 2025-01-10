import React, { useState, useEffect }  from 'react';
// import { useUserActions } from '../../hooks/api';
import { useUser } from '../../UserContext';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from "sweetalert2";
import { useIntl } from "react-intl";
import * as yup from 'yup';

const Welcome = () => {
  const [user] = useUser() || [{}];
  const navigate = useNavigate();
  const [dominio, setDominio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [saveCredentials, setSaveCredentials] = useState(false);
  const intl = useIntl();

  const schema = yup.object().shape({
    dominio: yup.string().required('El nombre de dominio es obligatorio'),
    telefono: yup.string().required('El teléfono es obligatorio'),
  });

  useEffect(() => {
    let localData;
    try {
      localData = JSON.parse(localStorage.getItem("data"));
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
    if (localData) {
      setDominio(localData.dominio || '');
      setTelefono(localData.telefono || '');
      setSaveCredentials(true);
    }
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

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
        Swal.fire({
          title: intl.formatMessage({ id: "singInError" }),
          text: data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else if (data.status === "ok") {
        if (saveCredentials) {
          localStorage.setItem("data", JSON.stringify({ dominio, telefono }));
        } else {
          localStorage.clear();
        }
        Swal.fire({
          title: intl.formatMessage({ id: "modalEntrada" }, { name: user?.info?.name || "Usuario" }),
          timer: 2000,
          timerProgressBar: true,
          willClose: () => navigate('/contacto'),
        });
      }
      toast.success('Cliente validado exitosamente');
      reset();
    } catch (error) {
      setMensajeError('Ha ocurrido un error. Por favor verifique todos los datos');
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h1>¡WELCOME!</h1>
        <section>
          <label>Nombre de la Empresa</label>
          <input
            type="text"
            className="input_welcome"
            {...register("nombre")}
            placeholder="Dominio / Business nombre*"
          />
          {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre.message}</p>}
        </section>
        <section>
          <input
            type="telefono"
            name="telefono"
            className="input_welcome"
            {...register("telefono")}
            placeholder="Teléfono*"
          />
          {errors.telefono && <p style={{ color: 'red' }}>{errors.telefono.message}</p>}
        </section>
        <button type="submit" className="btn-welcome">Agregar y Continuar</button>
        {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
      </form>
    </div>
  );
};

export default Welcome;
