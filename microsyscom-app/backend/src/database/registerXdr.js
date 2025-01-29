'use strict'

const { getDB } = require("./getDB");
const { newError } = require("../../helps");
const brcypt = require('bcrypt');

const registerXdr = async(
    solucion_xdr, proveedor, firewall,
    antimalware,antiphishing,antitampering,aptprotection,treath_hunting,
    cifrado_datos,remote_forensics,sandbox_analyzer,antiexploit_advance,
    control_contenido,control_app,control_naveg,analisis_web,netw_att_def,
    user_authoriz,control_disp,advan_treatC,admin_risk,analisis_comp,email_protect,
    ransomware,pol_seguridad,parches,costes,apuntes) => {
        let connection;
        try {
        connection = await getDB();
        const [regist] = await connection.query(
        `INSERT INTO xdr (solucion_xdr, proveedor, firewall,
    antimalware,antiphishing,antitampering,aptprotection,treath_hunting,
    cifrado_datos,remote_forensics,sandbox_analyzer,antiexploit_advance,
    control_contenido,control_app,control_naveg,analisis_web,netw_att_def,
    user_authoriz,control_disp,advan_treatC,admin_risk,analisis_comp,email_protect,
    ransomware,pol_seguridad,parches,costes,apuntes) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [solucion_xdr, proveedor, firewall,
        antimalware,antiphishing,antitampering,aptprotection,treath_hunting,
        cifrado_datos,remote_forensics,sandbox_analyzer,antiexploit_advance,
        control_contenido,control_app,control_naveg,analisis_web,netw_att_def,
        user_authoriz,control_disp,advan_treatC,admin_risk,analisis_comp,email_protect,
        ransomware,pol_seguridad,parches,costes,apuntes]
        );
        return regist.insertId;
        } finally{
            if (connection) {
                connection.release();
            }
        }
    };

module.exports = {
    registerXdr,
}