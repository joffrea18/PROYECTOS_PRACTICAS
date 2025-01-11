'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require("../../helps");
const express = require("express");
const Joi = require('joi');
const { registerSwitch } = require("../database");

const data = Joi.object({
    fabricante: Joi.string().allow(''),
    modelo: Joi.string().allow(''),
    licencia: Joi.boolean().allow(''),
    anti_storm: Joi.boolean().allow(''),
    gest_aislada: Joi.boolean().allow(''),
    monitoreo_disp: Joi.boolean().allow(''),
    segment_vlans: Joi.boolean().allow(''),
    automatic_backup: Joi.boolean().allow(''),
    costes: Joi.string().allow(''),
    apuntes: Joi.string().allow(''),  
});

const switchs = async (req, res, next) => {
    let connect = await getDB();
    try {
        let { fabricante, 
            modelo,  
            licencia,
            anti_storm,  
            gest_aislada,    
            monitoreo_disp,
            segment_vlans,
            automatic_backup,   
            costes,
            apuntes
        } = req.body;

        await data.validateAsync(req.body)

        if (apuntes) {
            const validation = data.validate(apuntes)
            if (!validation.error) {
                console.log("Por favor verifique los datos fabricante & modelo y vuelva a intentarlo nuevamente"); 
            }
        }
        const id = await registerSwitch(fabricante, 
        modelo,  
        licencia,
        anti_storm,  
        gest_aislada,    
        monitoreo_disp,
        segment_vlans,
        automatic_backup,   
        costes,
        apuntes)
        res.send({
            status: 'ok',
            message: `Datos registrados correctamente con el id: ${id}`
        })

    } catch (error) {
        next(error)
    } finally {
        if (connect) {
            connect.release();
        }
    }
};

module.exports = {
    switchs,
};


