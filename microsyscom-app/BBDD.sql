use MICROSYSCOM;
DROP TABLE usuarios;

DROP TABLE IF EXISTS business;
DROP TABLE IF EXISTS contactos;
DROP TABLE IF EXISTS routerinfo;
DROP TABLE IF EXISTS firewallinfo;
DROP TABLE IF EXISTS switchinfo;
DROP TABLE IF EXISTS accespointinfo;
DROP TABLE IF EXISTS xdr;
DROP TABLE IF EXISTS servidoresinfo;

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

SELECT id, date FROM business b
UNION
SELECT id, id_business FROM contactos c;
-- WHERE c.id_businnes IS NULL;

INSERT INTO business (name, telefono)
VALUE ('pepe', 888888888);


CREATE TABLE IF NOT EXISTS business (
	id int unsigned NOT NULL AUTO_INCREMENT,
	date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	name varchar(100) NOT NULL,
	telefono numeric(15,0) DEFAULT NULL,
	PRIMARY KEY (id),
	UNIQUE KEY name (name)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE contactos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_business int unsigned,
        companyName VARCHAR(255) NOT NULL,
        businessActivity VARCHAR(255) DEFAULT NULL,
        contactPerson VARCHAR(255) DEFAULT NULL,
        email VARCHAR(255) DEFAULT NULL,
        phone VARCHAR(20) DEFAULT NULL,
        department VARCHAR(255) DEFAULT NULL,
        date DATE DEFAULT NULL,
        time TIME DEFAULT NULL,
        FOREIGN KEY (id_business) REFERENCES business(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SELECT * FROM contactos c, business b
WHERE c.id = 2 ;

SELECT * FROM business;
SELECT * FROM contactos;

CREATE TABLE IF NOT EXISTS routerinfo (
        id int unsigned NOT NULL AUTO_INCREMENT,
        id_contactos INT NOT NULL,
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
        FOREIGN KEY (id_contactos) REFERENCES contactos(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE,
        UNIQUE KEY telefono (telefono)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS firewallinfo (
        id int unsigned NOT NULL AUTO_INCREMENT,
        id_routerinfo int unsigned NOT NULL,
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
			ON DELETE CASCADE 
			ON UPDATE CASCADE
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS switchinfo (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        id_firewallinfo int unsigned NOT NULL,
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
        PRIMARY KEY (id),
        FOREIGN KEY (id_firewallinfo) REFERENCES firewallinfo(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS accespointinfo (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        id_switchinfo INT unsigned NOT NULL,
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
			ON DELETE CASCADE 
			ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS xdr (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        id_accespointinfo INT unsigned NOT NULL,
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
			ON DELETE CASCADE 
			ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS servidoresinfo (
        id INT unsigned NOT NULL AUTO_INCREMENT,
        id_xdr INT unsigned NOT NULL,
        date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (id_xdr) REFERENCES xdr(id)
			ON DELETE CASCADE 
			ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

