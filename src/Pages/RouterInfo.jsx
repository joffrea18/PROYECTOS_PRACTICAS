import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const RouterInfo = () => {
    return (
        <div>
            <form action="get">
            <section class="category-card" id="router">
                <h2>Router</h2>
                {/* <div class="input-group"> */}
                    <label for="router-isp">ISP</label>
                    <input type="text" id="router-isp" name="router-isp" />
                {/* </div> */}
                {/* <div class="input-group"> */}
                    <label for="router-telefono">Teléfono asociado</label>
                    <input type="text" id="router-telefono" name="router-telefono" />
                {/* </div> */}
                {/* <div class="input-group"> */}
                    <label for="router-ip">IP Estática</label>
                    <input type="text" id="router-ip" name="router-ip" />
                {/* </div> */}
                {/* <div class="checkbox-group"> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" id="router-ip-estatica" name="router-ip-estatica" /> 
                        <label for="router-ip-estatica">IP Estática</label>
                    {/* </div> */}
                    {/* <div class="checkbox-wrapper-25"> */}
                        <input type="checkbox" id="fibra-backup" name="fibra-backup" onclick="toggleBackupFields()" /> 
                        <label for="fibra-backup">Fibra Backup</label>
                    {/* </div> */}
                {/* </div> */}
                {/* <div class="input-group"> */}
                    <label for="backup-isp">ISP de Backup</label>
                    <input type="text" id="backup-isp" name="backup-isp" />
                {/* </div> */}
                {/* <div class="input-group"> */}
                    <label for="backup-telefono">Teléfono de Backup</label>
                    <input type="text" id="backup-telefono" name="backup-telefono" />
                {/* </div> */}
                {/* <div class="input-group"> */}
                    <label for="backup-ip">IP Estática de Backup</label>
                    <input type="text" id="backup-ip" name="backup-ip" />
                {/* </div> */}
            </section>
            </form>
            <Link style={{textDecoration : 'none' }} to='/buttonppal' > 
            <Button variant='contained' className='back-button' >
           <h1 className='back-button'>BACK</h1>
           </Button>
            </Link>
           <Link style={{textDecoration : 'none' }} to='/firewallinfo' > 
           <Button variant='contained' className='next-button'>
            <h1 className='next-button'>NEXT</h1>
           </Button>
           </Link>
        </div>
    );
}

export default RouterInfo;