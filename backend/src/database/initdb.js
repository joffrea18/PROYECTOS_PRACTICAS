'use strict';

const { getConnection } = require('./getDB');
require('dotenv').config();

async function main() {

let connection;

try {
    
    connection = await getConnection();
    
    console.log("Eliminando tablas si existen...");
    await connection.query('DROP TABLE IF EXISTS business');
    await connection.query('DROP TABLE IF EXISTS contactos');
    await connection.query('DROP TABLE IF EXISTS routerinfo');
    await connection.query('DROP TABLE IF EXISTS firewallinfo');
    await connection.query('DROP TABLE IF EXISTS switchinfo');
    await connection.query('DROP TABLE IF EXISTS accespointinfo');
    await connection.query('DROP TABLE IF EXISTS xdr');
    await connection.query('DROP TABLE IF EXISTS servidoresinfo');

    
    console.log("Creando tablas...");
    
    await connection.query (`
    CREATE TABLE IF NOT EXISTS business (
        id int unsigned NOT NULL AUTO_INCREMENT,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        name varchar(100) NOT NULL,
        telefono numeric(15,0) DEFAULT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY name (name)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
      `);

      await connection.query (`
      CREATE TABLE contactos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        companyName VARCHAR(255) NOT NULL,
        businessActivity VARCHAR(255) DEFAULT NULL,
        contactPerson VARCHAR(255) DEFAULT NULL,
        email VARCHAR(255) DEFAULT NULL,
        phone VARCHAR(20) DEFAULT NULL,
        department VARCHAR(255) DEFAULT NULL,
        date DATE DEFAULT NULL,
        time TIME DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (id_business) REFERENCES business(id)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
      `);
      
    await connection.query (`
    CREATE TABLE IF NOT EXISTS routerinfo (
        id int unsigned NOT NULL AUTO_INCREMENT,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        isp varchar(100) NOT NULL,
        telefono numeric(15,0) DEFAULT NULL,
        telefono_backup numeric(15,0) DEFAULT NULL,
        ip_estatica char(100) DEFAULT NULL,
        ip_estatica_backup char(100) DEFAULT NULL,
        fibra_backup boolean DEFAULT false,
        costes varchar(500) DEFAULT NULL,
        apuntes varchar(250) DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (id_contactos) REFERENCES contactos(id),
        UNIQUE KEY telefono (telefono)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
      `);
    
    await connection.query(`
    CREATE TABLE IF NOT EXISTS firewallinfo (
        id int unsigned NOT NULL AUTO_INCREMENT,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        fabricante varchar(125) DEFAULT NULL,
        modelo varchar(125) DEFAULT NULL,
        ips boolean DEFAULT false,
        licencia boolean DEFAULT false,
        sandboxing boolean DEFAULT false,
        email_security boolean DEFAULT false,
        ssl_inspection boolean DEFAULT false,
        sis_alertslogin boolean DEFAULT false,
        serv_antimalware boolean DEFAULT false,
        fil_reputacion boolean DEFAULT false,
        detect_response boolean DEFAULT false,
        cert_confiable boolean DEFAULT false,
        monit_dispositivo boolean DEFAULT false,
        segmen_vlans boolean DEFAULT false,
        acces_uiexterior boolean DEFAULT false,
        acces_uinterior boolean DEFAULT false,
        vpn_mfa boolean DEFAULT false,
        automatic_backup boolean DEFAULT false,
        vpn_limitadogeo boolean DEFAULT false,
        costes varchar(250) DEFAULT NULL,
        apuntes varchar(250) DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (id_routerinfo) REFERENCES routerinfo(id)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);

    await connection.query(`
    CREATE TABLE IF NOT EXISTS switchinfo (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        fabricante varchar(125) DEFAULT NULL,
        modelo varchar(125) DEFAULT NULL,
        licencia boolean DEFAULT false,
        anti-storm boolean DEFAULT false,
        gest_aislada boolean DEFAULT false,
        monitoreo_disp boolean DEFAULT false,
        segment_vlans boolean DEFAULT false,
        automatic_backup boolean DEFAULT false,
        costes varchar(250) DEFAULT NULL,
        apuntes varchar(250) DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (id_firewallinfo) REFERENCES firewallinfo(id)        
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);

    await connection.query(`
    CREATE TABLE IF NOT EXISTS accespointinfo (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        fabricante varchar(125) DEFAULT NULL,
        modelo varchar(125) DEFAULT NULL,
        gestion_aislada boolean DEFAULT false,
        control_mac boolean DEFAULT false,
        ssid_oculto boolean DEFAULT false,
        desact_ssid boolean DEFAULT false,
        authent_radius boolean DEFAULT false,
        implementacion_wips boolean DEFAULT false,
        monitoreo_dispo boolean DEFAULT false,
        acces_vpnlocal boolean DEFAULT false,
        wpa3_wpa2 boolean DEFAULT false,
        wifi_invitados boolean DEFAULT false,
        segment_reclocales boolean DEFAULT false,
        wps_wep_wpa boolean DEFAULT false,
        cert_eap_tls boolean DEFAULT false,
        costes varchar(250) DEFAULT NULL,
        apuntes varchar(250) DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (id_switchinfo) REFERENCES switchinfo(id)
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
    
    await connection.query(`
    CREATE TABLE IF NOT EXISTS xdr (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        solucion_xdr varchar(125) DEFAULT NULL,
        proveedor varchar(125) DEFAULT NULL,
        firewall boolean DEFAULT false,
        antimalware boolean DEFAULT false,
        antiphishing boolean DEFAULT false,
        antitampering boolean DEFAULT false,
        aptprotection boolean DEFAULT false,
        treath_hunting boolean DEFAULT false,
        cifrado_datos boolean DEFAULT false,
        remote_forensics boolean DEFAULT false,
        sandbox_analyzer boolean DEFAULT false,
        antiexploit_advance boolean DEFAULT false,
        control_contenido boolean DEFAULT false,
        control_app boolean DEFAULT false,
        control_naveg boolean DEFAULT false,
        analisis_web boolean DEFAULT false,
        netw_att_def boolean DEFAULT false,
        user_authoriz boolean DEFAULT false,
        control_disp boolean DEFAULT false,
        advan_treatC boolean DEFAULT false,
        admin_risk boolean DEFAULT false,
        analisis_comp boolean DEFAULT false,
        email_protect boolean DEFAULT false,
        ransomware boolean DEFAULT false,
        pol_seguridad boolean DEFAULT false,
        parches boolean DEFAULT false,
        costes varchar(250) DEFAULT NULL,
        apuntes varchar(250) DEFAULT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (id_accespointinfo) REFERENCES accespointinfo(id)
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);

    await connection.query(`
    CREATE TABLE IF NOT EXISTS servidoresinfo (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (id_xdr) REFERENCES xdr(id)
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
        
console.log("Tablas creadas");
        
        
} catch (error) {
    console.error(error);
}finally{
    if(connection){
        connection.release();
    }

    process.exit(3);
}
}

main();

    
