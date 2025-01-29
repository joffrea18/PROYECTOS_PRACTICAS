'use strict'

const { getDB } = require("./getDB");
const { newError } = require("../../helps");
const brcypt = require('bcrypt');

const registerAccessP = async(
fabricante, modelo, gestion_aislada,
    control_mac, ssid_oculto, desact_ssid, authent_radius,
    implementacion_wips, monitoreo_dispo, acces_vpnlocal, wpa3_wpa2,
    wifi_invitados, segment_reclocales, wps_wep_wpa, cert_eap_tls,
    costes, apuntes) => {
    let connection;
    try {
        connection = await getDB();

        const [regist] = await connection.query(
        `INSERT INTO accespointinfo (fabricante, modelo, gestion_aislada,
    control_mac, ssid_oculto, desact_ssid, authent_radius,
    implementacion_wips, monitoreo_dispo, acces_vpnlocal, wpa3_wpa2,
    wifi_invitados, segment_reclocales, wps_wep_wpa, cert_eap_tls,
    costes, apuntes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [fabricante, modelo, gestion_aislada,
        control_mac, ssid_oculto, desact_ssid, authent_radius,
        implementacion_wips, monitoreo_dispo, acces_vpnlocal, wpa3_wpa2,
        wifi_invitados, segment_reclocales, wps_wep_wpa, cert_eap_tls,
        costes, apuntes]
        );

    return regist.insertId;
    }finally{
        if (connection) {
            connection.release();
        }
    }
};

module.exports = {
    registerAccessP,
}