'use strict'

const { getDB } = require("../../database/getDB");
const { newError } = require('../../../helps');
const brcypt = require('bcrypt');
const Joi = require('joi');

const home = async (name, telefono) => {

    let connection;

    try {

        connection = await getDB();

        const [user] = await connection.query(`
            SELECT id FROM business WHERE telefono = ?
            `,
            [telefono]
            );
       
            if (user.length > 0) {
               throw newError ('Ya existe un usuario registrado con ese telefono', 409);
            }
            const [ createUser ] = await connection.query(`
                INSERT INTO business (name, telefono) VALUES(?, ?)
                `,
                [name, telefono]
                );
            
                return createUser.insertId;

    } finally {
        if (connection) {
            connection.release();
        }
    }
}

module.exports = {
    home,
};