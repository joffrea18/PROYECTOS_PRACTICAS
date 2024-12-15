'use strict'

const { getDB } = require('./getDB');
const { newError } = require('../../helps');
const brcypt = require('bcrypt');

const registerBusiness = async (name, telefono) => {

    let connection;

    try {
        connection = await getDB();
   
        const [user] = await connection.query(`
        SELECT id FROM business WHERE telefono = ?
        `,
        [telefono]
        );
   
        if (user.length > 0) {
           throw newError ('Ya existe un cliente registrado con ese telefono de contacto', 409);
        }
       
        const [createUser] = await connection.query(`
        INSERT INTO business (id, date, name, telefono,) VALUES(?, ?, ?, ?)
        `,
        [name, telefono]
        );
   
        
        return createUser.insertId;
        
       }finally{
           if (connection) {
               connection.release();
           }
       } 
};

module.exports = {
    registerBusiness,
}