import React from 'react';
// import './PagesCSS/Pages.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Servidores = () => {
    return (
        <div>
            <br />
            <section class="category-card"
                id='servidores'>
            <h2>Servidores</h2>
            </section>
            <br />
            <br />

            <form action="get"
                className='forms'>
            
            <nav
                className='server-nav'>
            <label
                for="so-servidor">
                    Sistema Operativo
            </label>
                <input
                    type="text"
                    name="so-servidor"
                    placeholder='Sistema operativo'/>
                  
                    <label
                        for="funcion-servidor">
                            Función</label>
                    <input
                        type="text"
                        name="funcion-servidor"
                        placeholder='Función' />
                
                    <label
                        for="ip-servidor">
                            IP</label>
                    <input
                        type="text"
                        name="ip-servidor"
                        placeholder='IP'/>
                    <button
                        className='add-server'
                        id='add-server'
                        to={'/buttonppal/routerinfo'}>
                        AGREGAR SERVIDOR
                        {/* Este botón debe renderizar un
                        nuevo espacio en el cual un form
                        permita el add del new server */}
                    </button>
                        </nav>
                        <br />
                 
                        <nav
                            className='server-nav-w'>
                        <h3>Windows Server</h3>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="mfa"
                            /> MFA
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="laps"
                            /> LAPS
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="politicas-contrasenas"
                            />
                            Configurar políticas de contraseñas
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="control-cuentas-privilegiadas"
                            />
                            Control de cuentas privilegiadas
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="deshabilitar-cuentas-predeterminadas"
                            /> Deshabilitar cuentas predeterminadas
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="configuracion-uac"
                            /> Configuración de UAC (User Account Control)
                        </label>

                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="configurar-rdp"
                                onchange="toggleRdpOptions(this)"
                                /> Configurar y restringir RDP
                        </label>

                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="network-level-authentication"
                                disabled
                                /> Habilitar Network Level Authentication (NLA)
                        </label>

                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="rdp-gateway"
                                disabled
                                /> Usar RDP Gateway
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="aislar-fsmo"
                            /> Aislar roles FSMO
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="gpo-restrictivas"
                            /> GPOs restrictivas
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="monitoreo-dispositivo-servidor"
                            /> Monitoreo del dispositivo
                        </label>
                        </nav>
                        <br />

                        <nav
                            className='server-nav-w'>
                        <h3>Linux</h3>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="selinux"
                            /> Implementar SELinux o AppArmor
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="deshabilitar-ssh-root"
                            /> Deshabilitar el acceso SSH directo a la cuenta root
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="autenticacion-clave-publica"
                            /> Utilizar autenticación mediante clave pública en SSH
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="restricciones-ssh"
                            /> Implementar restricciones de usuarios y de IP en SSH
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="cambiar-puerto-ssh"
                            /> Cambiar el puerto predeterminado de SSH
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="fail2ban"
                            /> Implementar Fail2ban
                        </label>

                        <label htmlFor="">
                        <input
                            type="checkbox"
                            name="herramientas-integridad"
                            /> Herramientas de monitoreo (AIDE y Tripwire)
                        </label>
                        </nav>
        </form>

           <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/printeroption`} > 
           <Button
            variant='contained'
            id='next-button'
            style={{
                boxShadow: '10px 5px 5px black'
            }}>
                    PRINT REPORT
           </Button>
           </Link>
        </div>
    );
}

export default Servidores;
