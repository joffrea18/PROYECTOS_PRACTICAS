'use strict'

const { getDB } = require('./getDB');
const { newError } = require('../../helps');
const brcypt = require('bcrypt');

const registerServidores = async (
    fabricante,
    modelo,
    so,
    copias_segu,
    ips,
    apuntes) => {
        let connection;

        try {
            connection = await getDB();

            const [servi] = await connection.query(
                `SELECT ips FROM servidoresinfo s WHERE ips = ?`,
            [ips])

            if(servi.length > 0) {
                throw newError('IPS registrado con anterioridad')
            }

            const [ createServi ] = await connection.query(
                `INSERT INTO servidoresinfo (fabricante,
    modelo,
    so,
    copias_segu,
    ips,
    apuntes) VALUES(?, ?, ?, ?, ?, ?)`,
    [fabricante,
        modelo,
        so,
        copias_segu,
        ips,
        apuntes]
        );

        return createServi.insertId;
        } finally{
            if (connection) {
                connection.release();
            }
        }
    };

module.exports = {
    registerServidores,
}
