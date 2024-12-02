'use strict';

const { getDB } = require('./getDB');
const { newError } = require('../../helps');
const brcypt = require('bcrypt');

const registerClient = async ( companyName, businessActivity, contactPerson, email, phone, department, date, time ) => {
    let connection; 
    try {
     connection = await getDB();

     const [user] = await connection.query(`
     SELECT id FROM contactos WHERE email = ?
     `,
     [email]
     );

     if (user.length > 0) {
        throw newError ('Ya existe un cliente registrado con ese correo', 409);
     }
    
     const [createUser] = await connection.query(`
     INSERT INTO contactos (companyName, businessActivity, contactPerson, email, phone, department, date, time) VALUES(?, ?, ?, ?, ?, ?, ?, ?)
     `,
     [companyName, businessActivity, contactPerson, email, phone, department, date, time]
     );

     
     return createUser.insertId;
     
    }finally{
        if (connection) {
            connection.release();
        }
    }   

};

module.exports = {
    registerClient,
}