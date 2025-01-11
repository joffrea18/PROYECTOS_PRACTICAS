'use strict'

const { getDB } = require("./getDB");
const { newError } = require("../../helps");
const brcypt = require('bcrypt');

const registerSwitch = async(fabricante, 
    modelo,  
    licencia,
    anti_storm,  
    gest_aislada,    
    monitoreo_disp,
    segment_vlans,
    automatic_backup,   
    costes,
    apuntes) => {
    let connection;
    try {
        connection = await getDB();

        const [createUser] = await connection.query(
            `INSERT INTO switchinfo (fabricante, modelo, licencia, anti_storm, gest_aislada, monitoreo_disp, segment_vlans, automatic_backup, costes, apuntes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [fabricante, 
            modelo,  
            licencia,
            anti_storm,  
            gest_aislada,    
            monitoreo_disp,
            segment_vlans,
            automatic_backup,   
            costes,
            apuntes]
        );

        return createUser.insertId;
    } finally{
        if (connection) {
            connection.release();
        }
    }
};

module.exports = {
    registerSwitch,
}