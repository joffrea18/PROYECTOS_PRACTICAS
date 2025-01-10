'use strict';

const { getDB } = require("../database/getDB");
const { newError } = require('../../helps');
const express = require("express");
const Joi = require('joi');
const { registerBusiness } = require("../database");

const users = Joi.object({
    dominio: Joi.string(),
    telefono: Joi.number(),
});


const home = async (req, res, next) => {
    
    let connect = await getDB();

    try {
        let { dominio, telefono } = req.body;

        await users.validateAsync(req.body)

        if (!dominio || !telefono) {
         throw newError('Los campos no pueden ser vacíos', 411);
        }

        if (dominio && telefono) {
            const validation = users.validate(dominio, telefono)
            if (!validation.error) {
                console.log("Por favor verifique los datos y vuelva a intentarlo nuevamente");
                
            }
        }

        const id = await registerBusiness(dominio, telefono);

        res.send({
            status: 'ok',
            message: `Datos registrados con id: ${id}`
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

