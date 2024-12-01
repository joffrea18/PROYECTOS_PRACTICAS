'use strict';

const mysql2 = require('mysql2/promise');

require('dotenv').config();

const { HOST, USER, PASSWORD, DATABASE } = process.env;

let pool;

const getDB = async () => {
    if(!pool){
        pool = mysql2.createPool({
            connectionLimit: 10,
            host: HOST,
            user: USER,
            password: PASSWORD,
            database: DATABASE,
            timezone: 'Z',
        });
    }
    return await pool.getConnection();
    
}



module.exports = {
    getDB,
};