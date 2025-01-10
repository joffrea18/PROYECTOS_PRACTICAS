import { React , useState, useEffect } from 'react';
import { usePoints } from '../context/PointsContext';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const SwitchInfo = ( ) => {

const { reset } = useForm();
const { setPoints } = usePoints();
const [ mensajeError, setMensajeError ] = useState('');

const [ inputValue, setInput ]
   = useState({
   fabricante: '',
   modelo: '',
   apuntes: '',
   costes: '' });

const [ checkboxes, setChexboxes ]
    = useState({
        licencia: '',
        anti_storm: '',
        segment_vlans: '',
        gest_aislada: '',
        automatic_backup: '',
        monitoreo_disp: ''
    });


const pointsf = {
    fabricante: 9, //
    modelo: 9,  //
    apuntes: 9,  //
    licencia: 9,  //
    anti_storm: 9,  //
    segment_vlans: 9,  //
    gest_aislada: 9,  //
    automatic_backup: 9,  //
    monitoreo_disp: 5,  //
    costes: 5  //
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

console.log(checkboxes);


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

console.log({inputValue});

useEffect(() => {
    const total = totalPoints();
    setPoints((prevPoints) => ({
        ...prevPoints,
        switch: total,
    })); // Actualiza los puntos en el contexto
}, [inputValue, checkboxes]); // Dependencias para actualizar cuando cambie algo
    

console.log(totalPoints());

  const onSubmit = async (data) => {

    setMensajeError('');
    try {
      const response = await fetch("http://localhost:4000/switchs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
        {...inputValue,
        ...checkboxes}), 
      });
  
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
  
      const data = await response.json();
      console.log("Datos enviados exitosamente:", data);

      toast.success('Cliente registrado exitosamente');
      reset();
      window.location.href = "/accesspoint";
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
        <div >
            <br />
            <br />
            <section
                class="category-card"
                id="switch">
                {/* <h2 className='business'>{business}</h2> */}
                <h1>Switch</h1>
            </section>
            <br />
            <br />

                <form action="get">
                    <label
                        for="switch-fabricante">
                            Fabricante
                            </label>
                    <input
                        type="text"
                        id='switch-fabricante'
                        name="fabricante"
                        onChange={handleInput}
                        placeholder='Fabricante'
                        value={inputValue.fabricante} />
                    <label
                        for="switch-modelo">
                    Modelo</label>
                    <input
                        type="text"
                        id='switch-modelo'
                        name="modelo"
                        onChange={handleInput}
                        placeholder='Modelo'
                        value={inputValue.modelo} />
                
                    <label htmlFor="">                       
                        <input
                            type="checkbox"
                            name="licencia"
                            onChange={handleCheckbox}
                            value={checkboxes.licencia} />
                        Licencia
                        </label>
                        
                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="anti_storm"
                            onChange={handleCheckbox}
                            value={checkboxes.anti_storm} />
                        Anti-storm
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="gest_aislada"
                            onChange={handleCheckbox}
                            value={checkboxes.gest_aislada} />
                        Gestión aislada
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="monitoreo_disp"
                            onChange={handleCheckbox}
                            value={checkboxes.monitoreo_disp} />
                        Monitoreo del dispositivo
                        </label>

                        <label htmlFor="">                    
                        <input
                            type="checkbox"
                            name="segment_vlans"
                            onChange={handleCheckbox}
                            value={checkboxes.segment_vlans} />
                        Segmentación por VLANs
                        </label>
                                            
                        <label htmlFor="">
                        <input
                           type="checkbox"
                           name="automatic_backup"
                           onChange={handleCheckbox}
                           value={checkboxes.automatic_backup} />
                        Backup automático ≤ 1 semana
                        </label>

                        <label 
                            for="costs-switch">
                                <b>COSTES</b>
                        </label>
                        <input
                            type="textarea"
                            className='text-area'
                            id='costs-switch'
                            name="costes"
                            onChange={handleInput}
                            placeholder='Adjuntar
                                presupuestos de los Switch
                                    para las sedes que carecen
                                    de él'
                            value={inputValue.costes} /> 

                        <textarea
                            name="apuntes"
                            className='text-area'
                            onChange={handleInput}
                            placeholder='Apunta tus Notas aquí'
                            value={inputValue.apuntes} />

                <button
        type="button" 
        onClick={onSubmit}
        className="btn btn-primary"
        >
        Ir al Firewall
      </button>
        </form>
        </div>
    );
}

export default SwitchInfo;
