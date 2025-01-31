CREATE DATABASE IF NOT EXISTS MICROSYSCOM;
use MICROSYSCOM;
DROP TABLE usuarios;
DROP DATABASE MICROSYSCOM;

DROP TABLE IF EXISTS business;
DROP TABLE IF EXISTS contactos;
DROP TABLE IF EXISTS routerinfo;
DROP TABLE IF EXISTS firewallinfo;
DROP TABLE IF EXISTS switchinfo;
DROP TABLE IF EXISTS accespointinfo;
DROP TABLE IF EXISTS xdr;
DROP TABLE IF EXISTS servidoresinfo;
DROP TABLE IF EXISTS sai;
DROP TABLE IF EXISTS almacenamiento;
DROP TABLE IF EXISTS copiasseguridad;
DROP TABLE IF EXISTS dominio;
DROP TABLE IF EXISTS pag_web;
DROP TABLE IF EXISTS correo_corp;
DROP TABLE IF EXISTS call_center;
DROP TABLE IF EXISTS impresoras;
DROP TABLE IF EXISTS erp;

CREATE USER joffrearias@localhost IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON MICROSYSCOM TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON contactos TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON business TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON routerinfo TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON firewallinfo TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON switchinfo TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON accespointinfo TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON xdr TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON servidoresinfo TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON sai TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON almacenamiento TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON copiasseguridad TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON dominio TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON pag_web TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON correo_corp TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON call_center TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON impresoras TO 'joffrearias'@'localhost';
GRANT SELECT, INSERT, UPDATE ON erp TO 'joffrearias'@'localhost';


CREATE TABLE IF NOT EXISTS business (
	id int unsigned NOT NULL AUTO_INCREMENT,
	date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	dominio varchar(100) NOT NULL,
	telefono numeric(15,0) DEFAULT NULL,
	PRIMARY KEY (id),
	UNIQUE KEY dominio (dominio)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE contactos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        companyName VARCHAR(255) DEFAULT NULL,
        businessActivity VARCHAR(255) DEFAULT NULL,
        contactPerson VARCHAR(255) DEFAULT NULL,
        email VARCHAR(255) DEFAULT NULL,
        phone VARCHAR(20) DEFAULT NULL,
        department VARCHAR(255) DEFAULT NULL,
        date DATE DEFAULT NULL,
        time TIME DEFAULT NULL,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS routerinfo (
        id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        isp TINYINT UNSIGNED NOT NULL,
        isp_backup VARCHAR(100) NULL,
        telefono numeric(15,0) DEFAULT NULL,
        telefono_backup numeric(15,0) DEFAULT NULL,
        ip_estatica char(100) DEFAULT NULL,
        ip_estatica_backup char(100) DEFAULT NULL,
        fibra_backup boolean DEFAULT false,
        costes varchar(500) DEFAULT NULL,
        FOREIGN KEY (id_business) REFERENCES business(id),
        UNIQUE KEY telefono (telefono)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS firewallinfo (
        id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
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
        FOREIGN KEY (id_business) REFERENCES business(id)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS switchinfo (
        id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        fabricante varchar(125) DEFAULT NULL,
        modelo varchar(125) DEFAULT NULL,
        licencia boolean DEFAULT false,
        anti_storm boolean DEFAULT false,
        gest_aislada boolean DEFAULT false,
        monitoreo_disp boolean DEFAULT false,
        segment_vlans boolean DEFAULT false,
        automatic_backup boolean DEFAULT false,
        costes varchar(250) DEFAULT NULL,
        apuntes varchar(250) DEFAULT NULL,
        FOREIGN KEY (id_business) REFERENCES business(id)
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS accespointinfo (
        id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
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
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS xdr (
        id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
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
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS servidoresinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_business INT UNSIGNED,
    fabricante VARCHAR(250) DEFAULT NULL,
    modelo VARCHAR(250) DEFAULT NULL,
    so VARCHAR(250) DEFAULT NULL,
    copias_segu VARCHAR(250) DEFAULT NULL,
    ips VARCHAR(250) DEFAULT NULL,
    apuntes VARCHAR(250) DEFAULT NULL,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_business)
        REFERENCES business (id)
)  ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

CREATE TABLE IF NOT EXISTS sai (
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        fabricante VARCHAR(250) DEFAULT NULL,
        modelo VARCHAR(250) DEFAULT NULL,
        disp_conectados VARCHAR(250) DEFAULT NULL,
        ip_vlan_cloud VARCHAR(250) DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS almacenamiento ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        tipo VARCHAR(250) DEFAULT NULL,
        fabricante VARCHAR(250) DEFAULT NULL,
        modelo VARCHAR(250) DEFAULT NULL,
        copias_segu VARCHAR(250) DEFAULT NULL,
        ips VARCHAR(250) DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS copiasseguridad ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        fabricante VARCHAR(250) DEFAULT NULL,
        proveedor VARCHAR(250) DEFAULT NULL,
        contacto INT DEFAULT NULL,
        politica_retencion VARCHAR(250) DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS dominio ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        dominio VARCHAR(250) DEFAULT NULL,
        regist_dominio VARCHAR(250) DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS pag_web ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        direccion VARCHAR(250) DEFAULT NULL,
        hosting int DEFAULT NULL,
        proveedor VARCHAR(250) DEFAULT NULL,
        contacto int DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS correo_corp ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        dominio VARCHAR(250) DEFAULT NULL,
        proveedor VARCHAR(250) DEFAULT NULL,
        contacto int DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS call_center ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        fabricante VARCHAR(250) DEFAULT NULL,
        proveedor VARCHAR(250) DEFAULT NULL,
        version_so VARCHAR(250) DEFAULT NULL,
        modelo VARCHAR(250) DEFAULT NULL,
        ip VARCHAR(250) DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS impresoras ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        fabricante VARCHAR(250) DEFAULT NULL,
        modelo VARCHAR(250) DEFAULT NULL,
        contacto INT DEFAULT NULL,
        ip VARCHAR(250) DEFAULT NULL,
        apuntes VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS erp ( 
		id int AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        fabricante VARCHAR(250) DEFAULT NULL,
        proveedor VARCHAR(250) DEFAULT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SELECT id, date FROM business b
UNION
SELECT id, id_business FROM contactos c;
-- WHERE c.id_businnes IS NULL;

INSERT INTO business (name, telefono)
VALUE ('pepe', 888888888);

SELECT * FROM contactos c, business b
WHERE c.id = 2 ;

SELECT * FROM business;
SELECT * FROM contactos;
SELECT * FROM business;
