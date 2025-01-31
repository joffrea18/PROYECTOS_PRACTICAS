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
const { router } = require('./src/controllers/router');
const { firewall } = require('./src/controllers/firewall');
const { switchs } = require('./src/controllers/switchs');
const { accesspoint } = require('./src/controllers/acccespoint');
const { xdr } = require('./src/controllers/xdr');
const { servidores } = require('./src/controllers/servidores');
const { sai } = require('./src/controllers/sai');
const { erp } = require('./src/controllers/erp');

// este es el primer middleware por donde pasa
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

app.post('/', home);
app.post('/contacto', contact);
app.post('/router', router);
app.post('/firewall', firewall);
app.post('/switch', switchs);
app.post('/accesspoint', accesspoint);
app.post('/xdr', xdr);
app.post('/servidores', servidores);
app.post('/sai', sai);
app.post('/erp', erp);


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
