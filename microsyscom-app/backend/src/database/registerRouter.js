'use strict'

const { getDB } = require('./getDB');
const { newError } = require('../../helps');
const brcypt = require('bcrypt');

const registerRouter = async ( isp,
   isp_backup, telefono, telefono_backup,
   ip_estatica, ip_estatica_backup,
   fibra_backup, costes) => {
   let connection;
     try {
    connection = await getDB();

     const [user] = await connection.query(
     `SELECT telefono FROM routerinfo WHERE telefono = ?`,
     [telefono]
     );

     if(user.length > 0) {
        throw newError('Ya existe un usuario registrado con ese número de teléfono');
     }

     const [createUser] = await connection.query(
        `INSERT INTO routerinfo (
        isp,
        isp_backup,
        telefono,
        telefono_backup,
        ip_estatica,
        ip_estatica_backup,
        fibra_backup,
        costes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [isp,
        isp_backup, telefono, telefono_backup,
        ip_estatica, ip_estatica_backup,
        fibra_backup, costes]
     );

     return createUser.insertId;

    } finally {
    if (connection) {
     connection.release();
    }
    }
 };

module.exports = {
 registerRouter,
}