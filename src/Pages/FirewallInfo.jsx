import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const FirewallInfo = () => {
    return (
        <div>
            <section className='friewall-section' id='firewall'>
            <h2>Firewall</h2>
            <form className='firewall-form' action='get'  >
                <label for="firewall-fabricante">Fabricante</label>
                <input type="text" id="firewall-fabricante" name="firewall-fabricante" />
                    <label for="firewall-modelo">Modelo</label>
                    <input type="text" id="firewall-modelo" name="firewall-modelo" />
                    <hn/>
                    {/* <label for="firewall-modelo">Licencia</label> */}
                <div class="checkbox-group">
                    {/* <hr /> */}
                    <input type="checkbox" name="licencia" placeholder='Licencia' /> Licencia
                    {/* <label for="firewall-modelo"></label> */}
                    <input type="checkbox" name="acceso-ui-exterior" /> Acceso limitado a la UI desde una IP del exterior
                    {/* <label htmlFor="get" > */}
                    <input type="checkbox" name="acceso-ui-interno" /> Acceso limitado a la UI desde un puerto de gestión desde el interior
                    <input type="checkbox" name="alertas-login" /> Sistema de alertas de inicio de sesión
                    <input type="checkbox" name="vpn-segura" /> VPN bajo protocolo seguro y con MFA
                    <input type="checkbox" name="anti-malware" /> Servicios Anti-Malware
                    <input type="checkbox" name="filtro-reputacion" /> Filtros de reputación
                    <input type="checkbox" name="ips" /> IPS
                    <input type="checkbox" name="sandboxing" /> SandBoxing
                    <input type="checkbox" name="email-security" /> Email Security
                    <input type="checkbox" name="cdr" /> Collaborative Detection and Response
                    <input type="checkbox" name="ssl-inspection" /> SSL Inspection
                    <input type="checkbox" name="segmentacion-vlan" /> Segmentación por VLANs
                    <input type="checkbox" name="certificado-confiable" /> Certificado confiable
                    <input type="checkbox" name="backup-semanal" /> Backup automático de frecuencia ≤ 1 semana
                    <input type="checkbox" name="monitoreo-dispositivo" /> Monitoreo del dispositivo
                </div>
            </form>
            </section>
           <Link style={{textDecoration : 'none' }} to='/routerinfo' > 
            <Button variant='contained' className='back-button' >
           <h1 className='back-button'>BACK</h1>
           </Button>
            </Link>
           <Link style={{textDecoration : 'none' }} to='/switchinfo' > 
           <Button variant='contained' className='next-button'>
            <h1 className='next-button'>NEXT</h1>
           </Button>
           </Link>
        </div>
    );
}

export default FirewallInfo;
