'use strict'

const { getDB } = require('../database/getDB');
const { newError } = require("../../helps");
const brcypt = require('bcrypt');

const registerErp = async (
    fabricante,
    proveedor,
    apuntes
) => {
    let connection;
    try {
        connection = await getDB();
        const [regist] = await connection.query(
        `INSERT INTO erp (fabricante, proveedor, apuntes)
        VALUES (?, ?, ?)`,
        [fabricante, proveedor, apuntes]);
        return regist.insertId;
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = {
    registerErp,
}