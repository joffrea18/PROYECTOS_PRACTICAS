'use strict';
// const express = require('express');

// require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
// const chalk = import('chalk');
const app = express();
const port = 4000;
const cors = require('cors');
const mysql2 = require('mysql2');
// const { pruebas, newUser } = require('./src/controllers/users');

// este es el primer middleware por donde pasa
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(cors());

// Controllers user
// Conexión a MySQL
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '24022016',
    database: 'MICROSYSCOM'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar con MySQL:', err);
        return;
    }
    console.log('Conexión a MySQL exitosa');
});

// Rutas de ejemplo
app.get('/http://localhost:3000/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// PUERTO
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Middleware para rutas no definidas
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});


app.use((error, req, res, next) => {
    console.error(error);

    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});



