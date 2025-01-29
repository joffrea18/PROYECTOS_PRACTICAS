'use strict';

const { getDB } = require("../database/getDB");
const { newError } = require('../../helps');
const express = require("express");
const Joi = require('joi');
const { registerRouter } = require('../database');

const data = Joi.object({
    isp: Joi.boolean().allow(''),
    isp_backup: Joi.string().allow(''),
    telefono: Joi.number().allow(''),
    telefono_backup: Joi.number().allow(''),
    ip_estatica: Joi.string().allow(''),
    ip_estatica_backup: Joi.string().allow(''),
    fibra_backup: Joi.boolean().allow(''),
    costes: Joi.string().allow(''),
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

        if (isp ) {
            const validation = data.validate(
                isp
            )
            if (!validation.error) {
                console.log("Por favor verifique isp e ingrese nuevamente");
                
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