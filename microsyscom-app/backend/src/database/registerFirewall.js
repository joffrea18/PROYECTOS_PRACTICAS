'use strict'

const { getDB } = require("./getDB");
const { newError } = require("../../helps");
const brcypt = require('bcrypt');

const registerFirewall = async(fabricante, modelo, ips, licencia,
    sandboxing, email_security, ssl_inspection, sis_alertslogin,
    serv_antimalware, fil_reputacion, detect_response, cert_confiable, 
    monit_dispositivo, segmen_vlans, acces_uiexterior, acces_uinterior, 
    vpn_mfa, automatic_backup, vpn_limitadogeo, costes) => {
    let connection;
    try {
        connection = await getDB();

        const [createUser] = await connection.query(`
        INSERT INTO firewallinfo (fabricante, modelo, ips, licencia, sandboxing, email_security, ssl_inspection, sis_alertslogin, serv_antimalware, fil_reputacion, detect_response, cert_confiable, monit_dispositivo, segmen_vlans, acces_uiexterior, acces_uinterior, vpn_mfa, automatic_backup, vpn_limitadogeo, costes) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [fabricante, modelo, ips, licencia,
            sandboxing, email_security, ssl_inspection, sis_alertslogin,
            serv_antimalware, fil_reputacion, detect_response, cert_confiable, 
            monit_dispositivo, segmen_vlans, acces_uiexterior, acces_uinterior, 
            vpn_mfa, automatic_backup, vpn_limitadogeo, costes]
        );

        return createUser.insertId;
    } finally{
        if (connection) {
            connection.release();
        }
    }
};

module.exports = {
    registerFirewall,
}