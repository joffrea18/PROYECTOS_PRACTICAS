'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const app = express();
const port = 4000;
const cors = require('cors');
const { home } = require ('./src/controllers/business');

// este es el primer middleware por donde pasa
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(cors());

// Controllers user
// Conexión a MySQL
// const db = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '24022016',
//     database: 'MICROSYSCOM'
// });

// db.connect(err => {
//     if (err) {
//         console.error('Error al conectar con MySQL:', err);
//         return;
//     }
//     console.log('Conexión a MySQL exitosa');
// });

app.get('/', home);
// app.get('/buttonppal/firewallinfo', firewall); // Visualización de información del firewall



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


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
