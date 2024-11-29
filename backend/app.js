'use strict';
// const express = require('express');

// require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
// const chalk = import('chalk');
const app = express();
const cors = require('cors');

// este es el primer middleware por donde pasa
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(cors());


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


// Puerto
app.listen(3000, () => {
    console.log((`Servidor funcionando 👍🏼`));
    });


