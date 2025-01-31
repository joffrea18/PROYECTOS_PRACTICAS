'use strict'

const { getDB } = require("./getDB");
const { newError } = require("../../helps");
const brcypt = require('bcrypt');

const registerSai = async(
    fabricante,
    modelo,
    disp_conectados,
    ip_vlan_cloud,
    apuntes) => {
    let connection;
    try {
        connection = await getDB();
        const [regist] = await connection.query(
        `INSERT INTO sai (fabricante, modelo, disp_conectados, ip_vlan_cloud, apuntes)
        VALUES (?, ?, ?, ?, ?)`,
        [fabricante,
        modelo,
        disp_conectados,
        ip_vlan_cloud,
        apuntes]);
        return regist.insertId;
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = {
    registerSai,
}