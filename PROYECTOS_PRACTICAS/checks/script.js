// Función para habilitar/deshabilitar los campos de ISP, Teléfono e IP de Backup
function toggleBackupFields() {
    const fibraCheckbox = document.getElementById('fibra-backup');
    const backupIspField = document.getElementById('backup-isp');
    const backupPhoneField = document.getElementById('backup-telefono');
    const backupIpField = document.getElementById('backup-ip');
    
    if (fibraCheckbox.checked) {
        backupIspField.disabled = false;
        backupPhoneField.disabled = false;
        backupIpField.disabled = false;
    } else {
        backupIspField.disabled = true;
        backupPhoneField.disabled = true;
        backupIpField.disabled = true;
    }
}

// Función para agregar nuevos campos de servidor
function agregarServidor() {
    const contenedorServidores = document.getElementById('servidores-container');

    const servidorDiv = document.createElement('div');
    servidorDiv.classList.add('servidor-section');

    servidorDiv.innerHTML = `
        <div class="input-group">
            <label for="so-servidor">Sistema Operativo:</label>
            <input type="text" name="so-servidor">
        </div>
        <div class="input-group">
            <label for="funcion-servidor">Función:</label>
            <input type="text" name="funcion-servidor">
        </div>
        <div class="input-group">
            <label for="ip-servidor">IP:</label>
            <input type="text" name="ip-servidor">
        </div>
        <div class="checkbox-group">
            <h3>Windows Server</h3>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="politicas-contrasenas"> Configurar políticas de contraseñas</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="control-cuentas-privilegiadas"> Control de cuentas privilegiadas</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="deshabilitar-cuentas-predeterminadas"> Deshabilitar cuentas predeterminadas</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="configuracion-uac"> Configuración de UAC (User Account Control)</div>
            <div class="checkbox-wrapper-25">
                <input type="checkbox" name="configurar-rdp" onchange="toggleRdpOptions(this)"> Configurar y restringir RDP (Remote Desktop Protocol)
            </div>
            <div class="checkbox-wrapper-25 rdp-options">
                <input type="checkbox" name="network-level-authentication" disabled> Habilitar Network Level Authentication (NLA)
            </div>
            <div class="checkbox-wrapper-25 rdp-options">
                <input type="checkbox" name="rdp-gateway" disabled> Usar RDP Gateway
            </div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="aislar-fsmo"> Aislar roles FSMO</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="gpo-restrictivas"> GPOs restrictivas</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="mfa"> MFA</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="laps"> LAPS</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="monitoreo-dispositivo-servidor"> Monitoreo del dispositivo</div>

            <h3>Linux</h3>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="selinux"> Implementar SELinux o AppArmor</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="deshabilitar-ssh-root"> Deshabilitar el acceso SSH directo a la cuenta root</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="autenticacion-clave-publica"> Utilizar autenticación mediante clave pública en SSH</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="restricciones-ssh"> Implementar restricciones de usuarios y de IP en SSH</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="cambiar-puerto-ssh"> Cambiar el puerto predeterminado de SSH</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="fail2ban"> Implementar Fail2ban</div>
            <div class="checkbox-wrapper-25"><input type="checkbox" name="herramientas-integridad"> Implementar herramientas de monitoreo de integridad como AIDE y Tripwire</div>
        </div>
    `;

    contenedorServidores.appendChild(servidorDiv);
}

// Función para habilitar/deshabilitar opciones de RDP en Windows Server
function toggleRdpOptions(checkbox) {
    const rdpOptions = checkbox.closest('.checkbox-group').querySelectorAll('.rdp-options input');
    rdpOptions.forEach(option => option.disabled = !checkbox.checked);
}
// Función para habilitar/deshabilitar campos de SAI de respaldo
function toggleSaiRespaldoFields() {
    const saiRespaldoCheckbox = document.getElementById('sai-respaldo');
    const saiRespaldoFields = document.getElementById('sai-respaldo-fields');

    if (saiRespaldoCheckbox.checked) {
        saiRespaldoFields.style.display = 'block';
    } else {
        saiRespaldoFields.style.display = 'none';
    }
}
// Función para agregar nuevos campos de sistemas de almacenamiento
function agregarAlmacenamiento() {
    const contenedorAlmacenamiento = document.getElementById('almacenamiento-container');

    // Crear una nueva sección para otro sistema de almacenamiento
    const almacenamientoDiv = document.createElement('div');
    almacenamientoDiv.classList.add('almacenamiento-section');

    // Generar los inputs de tipo y función
    almacenamientoDiv.innerHTML = `
        <div class="input-group">
            <label for="tipo-almacenamiento">Tipo de Almacenamiento:</label>
            <input type="text" name="tipo-almacenamiento">
        </div>
        <div class="input-group">
            <label for="funcion-almacenamiento">Función:</label>
            <input type="text" name="funcion-almacenamiento">
        </div>
    `;

    // Añadir la nueva sección de almacenamiento al contenedor principal
    contenedorAlmacenamiento.appendChild(almacenamientoDiv);
}
// Función para agregar nuevos campos de dominios
function agregarDominio() {
    const contenedorDominios = document.getElementById('dominio-container');

    // Crear una nueva sección para otro dominio
    const dominioDiv = document.createElement('div');
    dominioDiv.classList.add('dominio-section');

    // Generar los inputs de nombre de dominio y registrador
    dominioDiv.innerHTML = `
        <div class="input-group">
            <label for="nombre-dominio">Nombre del Dominio:</label>
            <input type="text" name="nombre-dominio">
        </div>
        <div class="input-group">
            <label for="registrador-dominio">Registrador del Dominio:</label>
            <input type="text" name="registrador-dominio">
        </div>
    `;

    // Añadir la nueva sección de dominio al contenedor principal
    contenedorDominios.appendChild(dominioDiv);
}

// Función para agregar nuevos campos de correos corporativos
function agregarCorreo() {
    const contenedorCorreos = document.getElementById('correo-container');

    // Crear una nueva sección para otro correo corporativo
    const correoDiv = document.createElement('div');
    correoDiv.classList.add('correo-section');

    // Generar los inputs de nombre de dominio y hosting del correo
    correoDiv.innerHTML = `
        <div class="input-group">
            <label for="nombre-dominio-correo">Nombre del Dominio:</label>
            <input type="text" name="nombre-dominio-correo">
        </div>
        <div class="input-group">
            <label for="hosting-correo">Hosting:</label>
            <input type="text" name="hosting-correo">
        </div>
    `;

    // Añadir la nueva sección de correo al contenedor principal
    contenedorCorreos.appendChild(correoDiv);
}

// Función para agregar nuevas secciones de páginas web en el dominio
function agregarPaginaWeb() {
    const contenedorPaginas = document.getElementById('pagina-web-container');

    // Crear una nueva sección para otra página web
    const paginaDiv = document.createElement('div');
    paginaDiv.classList.add('pagina-section');

    // Generar los inputs de dirección de página y proveedor de hosting
    paginaDiv.innerHTML = `
        <div class="input-group">
            <label for="direccion-web">Dirección de la Página Web:</label>
            <input type="text" name="direccion-web">
        </div>
        <div class="input-group">
            <label for="proveedor-hosting">Proveedor de Hosting:</label>
            <input type="text" name="proveedor-hosting">
        </div>
    `;

    // Añadir la nueva sección de página web al contenedor principal
    contenedorPaginas.appendChild(paginaDiv);
}
