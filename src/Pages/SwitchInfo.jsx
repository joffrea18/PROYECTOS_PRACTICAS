import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const SwitchInfo = ({ business, id }) => {
    return (
        <div>
            <section class="category-card" id="switch">
                <h2>Switch</h2>
                <div class="input-group">
                    <label for="switch-fabricante">Fabricante:</label>
                    <input type="text" id="switch-fabricante" name="switch-fabricante" />
                </div>
                <div class="input-group">
                    <label for="switch-modelo">Modelo:</label>
                    <input type="text" id="switch-modelo" name="switch-modelo" />
                </div>
                <div class="input-group">
                    <label for="switch-notas">Notas:</label>
                    <textarea id="switch-notas" name="switch-notas"></textarea>
                </div>
                <div class="checkbox-group">
                    <div class="checkbox-wrapper-25"><input type="checkbox" name="licencia-switch" /> Licencia</div>
                    <div class="checkbox-wrapper-25"><input type="checkbox" name="anti-storm" /> Anti-storm</div>
                    <div class="checkbox-wrapper-25"><input type="checkbox" name="segmentacion-vlan-switch" /> Segmentación por VLANs</div>
                    <div class="checkbox-wrapper-25"><input type="checkbox" name="gestion-aislada" /> Gestión aislada</div>
                    <div class="checkbox-wrapper-25"><input type="checkbox" name="backup-semanal-switch" /> Backup automático de frecuencia ≤ 1 semana</div>
                    <div class="checkbox-wrapper-25"><input type="checkbox" name="monitoreo-dispositivo-switch" /> Monitoreo del dispositivo</div>
                </div>
            </section>
            <Link
                style={{textDecoration : 'none' }}
                to={`/buttonppal/`} > 
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
            to={`/printeroption/`} > 
           <Button variant='contained' >
            <h1
                className='next-button'>
                    PRINT REPORT</h1>
           </Button>
           </Link>
        </div>
    );
}

export default SwitchInfo;
