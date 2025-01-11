'use strict';

const { getDB } = require("../database/getDB");
const { newError } = require('../../helps');
const express = require("express");
const Joi = require('joi');
const { registerRouter } = require('../database');

const data = Joi.object({
    isp: Joi.number(),
    isp_backup: Joi.string(),
    telefono: Joi.number(),
    telefono_backup: Joi.number(),
    ip_estatica: Joi.string(),
    ip_estatica_backup: Joi.string(),
    fibra_backup: Joi.boolean(),
    costes: Joi.string(),
});

const router = async (req, res, next) => {

    let connect = await getDB();

    try {
        let {
            isp,
            isp_backup,
            telefono,
            telefono_backup,
            ip_estatica,
            ip_estatica_backup,
            fibra_backup,
            costes
        } = req.body;

        await data.validateAsync(req.body)

        if (isp &&
        telefono) {
            const validation = data.validate(
                isp &&
                telefono
            )
            if (!validation.error) {
                console.log("Por favor verifique los datos isp & teléfono e ingrese nuevamente");
                
            }
            
        }

        const id = await registerRouter(isp,
        isp_backup,
        telefono,
        telefono_backup,
        ip_estatica,
        ip_estatica_backup,
        fibra_backup,
        costes)
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
    router,
}