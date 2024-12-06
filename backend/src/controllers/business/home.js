'use strict';

const { getDB } = require("../../database/getDB");
const { newError } = require('../../../helps');
const express = require("express");
const Joi = require('joi');
const { registerBusiness } = require("../../database/registerBusiness");

const users = Joi.object({
    name: Joi.string(),
    telefono: Joi.string(),
});


const home = async (req, res, next) => {
    
    let connect = await getDB();

    try {
        let { name, telefono } = req.body;

        await users.validateAsync(req.body)

        if (!name || !telefono) {
         throw newError('Los campos no pueden ser vacíos', 411);
        }

        if (name && telefono) {
            const validation = users.validate(name, telefono)
            if (!validation.error) {
                console.log("Por favor verifique los datos y vuelva a intentarlo nuevamente");
                
            }
        }

        const id = await registerBusiness(name, telefono);

        res.send({
            status: 'ok',
            message: `Usuario creado con id: ${id}`
        })

    } catch (error) {
        next(error)
    } finally {
        if (connect) {
            connect.release();
        }
    }
}

module.exports = {
    home,
};

