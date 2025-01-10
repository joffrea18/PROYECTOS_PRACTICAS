'use strict';

const { getDB } = require("../database/getDB");
const { newError } = require('../../helps');
const express = require("express");
const Joi = require('joi');
const { registerRouter } = require('../database');

const users = Joi.object({
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

        await users.validateAsync(req.body)

        if (!isp ||
        !isp_backup ||
        !telefono ||
        !telefono_backup ||
        !ip_estatica ||
        !ip_estatica_backup ||
        !fibra_backup ||
        !costes) {
            throw newError('Los campos no pueden ser vacíos', 411);
        }

        if (isp &&
        isp_backup &&
        telefono &&
        telefono_backup &&
        ip_estatica &&
        ip_estatica_backup &&
        fibra_backup &&
        costes) {
            const validation = users.validate(
            isp,
            isp_backup,
            telefono,
            telefono_backup,
            ip_estatica,
            ip_estatica_backup,
            fibra_backup,
            costes
            )
            if (!validation.error) {
                console.log("Por favor verifique los datos e ingrese nuevamente");
                
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