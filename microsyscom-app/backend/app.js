'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const app = express();
const port = 4000;
const cors = require('cors');
const { contact } = require('./src/controllers/contact');
const { home } = require('./src/controllers/home');
const { routers } = require('./src/controllers/routers');

// este es el primer middleware por donde pasa
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

app.post('/', home);
app.post('/contacto', contact);
app.post('./router', routers);


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
