import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const FirewallInfo = ({ business, id }) => {
    
    /*
    Este es el bloque de lógica a aplicar en este componente (ADAPTAR)

     const [ inputValue, setInput ] = useState({ num1: '',
                                                num2: '',
                                                num3: '',
                                                num4: '',
                                                num5: '',
                                                num6: ''  });

    const [ checkboxes, setChexboxes ] = useState({ num7: '',
                                                   num8: '' });


       const points = {
        num1: 10, // Puntos para ISP
        num2: 5,  // Puntos para Teléfono asociado
        num3: 6,  // Puntos para IP Estática
        num4: 8,  // Puntos para ISP de Backup
        num5: 8,  // Puntos para Teléfono de Backup
        num6: 8,  // Puntos para IP Estática de Backup
        num7: 5,  // Puntos para IP estática
        num8: 50   // Puntos Fibra Backup

        // Total 100
    };
   
    useEffect(() => {
    const fetchData = async () => {
        try {
            await getId();           
        } catch (error) {
            return error;
        }
    };
    fetchData();
}, []);

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

    const totalPoints = () => {
        return calculateInputPoints() + calculateCheckboxPoints();
    };

    console.log(inputValue);


    */


    return (
        <div>
            <section
                className='firewall-section'
                id='firewall'>
                <h2>Firewall</h2>
            </section>

            <form
                className='firewall-form'
                action='get'  >
                <label
                    for="firewall-fabricante">Fabricante</label>
                <input
                    type="text"
                    id="firewall-fabricante"
                    name="firewall-fabricante" />
                    <label
                        for="firewall-modelo">Modelo</label>
                    <input
                        type="text"
                        id="firewall-modelo"
                        name="firewall-modelo" />
                    <hn/>
                    {/* <label for="firewall-modelo">Licencia</label> */}
                <div class="checkbox-group">
                    {/* <hr /> */}
                    {/* LICENCIA prela los demás checkboxes */}
                    <input
                        type="checkbox"
                        name="licencia"
                        placeholder='Licencia'
                    /> Licencia
                    {/* <label for="firewall-modelo"></label> */}
                    <input
                        type="checkbox"
                        name="acceso-ui-exterior" /> Acceso limitado a la UI desde una IP del exterior
                    {/* <label htmlFor="get" > */}
                    <input
                        type="checkbox"
                        name="acceso-ui-interno" /> Acceso limitado a la UI desde un puerto de gestión desde el interior
                    <input
                        type="checkbox"
                        name="alertas-login" /> Sistema de alertas de inicio de sesión
                    <input
                        type="checkbox"
                        name="vpn-segura" /> VPN bajo protocolo seguro y con MFA
                    <input
                        type="checkbox"
                        name="anti-malware" /> Servicios Anti-Malware
                    <input
                        type="checkbox"
                        name="filtro-reputacion" /> Filtros de reputación
                    <input
                        type="checkbox"
                        name="ips" /> IPS
                    <input
                        type="checkbox"
                        name="sandboxing" /> SandBoxing
                    <input
                        type="checkbox"
                        name="email-security" /> Email Security
                    <input
                        type="checkbox"
                        name="cdr" /> Collaborative Detection and Response
                    <input
                        type="checkbox"
                        name="ssl-inspection" /> SSL Inspection
                    <input
                        type="checkbox"
                        name="segmentacion-vlan" /> Segmentación por VLANs
                    <input
                        type="checkbox"
                        name="certificado-confiable" /> Certificado confiable
                    <input
                        type="checkbox"
                        name="backup-semanal" /> Backup automático de frecuencia ≤ 1 semana
                    <input
                        type="checkbox"
                        name="monitoreo-dispositivo" /> Monitoreo del dispositivo
                    <input
                        type="checkbox" 
                        name='' />Acceso Limitado Geograficamente a la VPN
                </div>
            
           <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/routerinfo/`} > 
            
            <Button
                variant='contained'
                className='back-button' >

           <h1
            className='back-button'>
                BACK</h1>

           </Button>
            </Link>
           <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/switchinfo/`} > 

           <Button
                variant='contained'
                className='next-button'>

            <h1
                className='next-button'>
                    NEXT</h1>

           </Button>
           </Link>
           </form>
        </div>
    );
}

export default FirewallInfo;
