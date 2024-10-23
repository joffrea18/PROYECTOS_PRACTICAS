import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './PagesCSS/Pages.css';
import { usePoints } from '../context/PointsContext';

const SwitchInfo = ({ business, id }) => {

    const { points } = usePoints();

    return (
        <div>
            <section class="category-card" id="switch">
                <h2>Switch</h2>
            </section>
                {/* <div class="input-group"> */}
                <form action="">
                    <label for="switch-fabricante">Fabricante:</label>
                    <input type="text" id="switch-fabricante" name="switch-fabricante" />
                {/* </div> */}
                {/* <div class="input-group"> */}
                    <label for="switch-modelo">Modelo:</label>
                    <input type="text" id="switch-modelo" name="switch-modelo" />
                {/* </div> */}
                {/* // <div class="input-group"> */}
                    <label for="switch-notas">Notas:</label>
                    <textarea id="switch-notas" name="switch-notas"></textarea>
                {/* </div> */}
                {/* <div class="checkbox-group"> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" name="licencia-switch" />
                        Licencia
                        {/* </div> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" name="anti-storm" />
                        Anti-storm
                        {/* </div> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" name="segmentacion-vlan-switch" />
                        Segmentación por VLANs
                        {/* </div> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" name="gestion-aislada" />
                        Gestión aislad
                        {/* </div> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" name="backup-semanal-switch" />
                        Backup automático de frecuencia ≤ 1 semana
                        {/* </div> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" name="monitoreo-dispositivo-switch" />
                        Monitoreo del dispositivo
                        {/* </div> */}
                </form>
                {/* </div> */}
            <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/firewallinfo/`} > 
            <Button
                variant='contained'
                className='back-button' >
                RETURN
           </Button>
            </Link>

           <Link
            style={{textDecoration : 'none' }}
            to={`/buttonppal/printeroption`} > 
           <Button variant='contained' >
                    PRINT REPORT
           </Button>
           </Link>
           <h1>POINTS: { points }</h1>
        </div>
    );
}

export default SwitchInfo;
