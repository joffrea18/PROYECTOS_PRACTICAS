'use strict'

const { getDB } = require("../../database/getDB");
const { newError } = require('../../../helps');
const express = require("express");
const Joi = require('joi');
const { registerClient } = require("../../database/registerClient");

const users = Joi.object({
    companyName: Joi.string().min(1).max(255).required(), 
  businessActivity: Joi.string().min(1).max(255).required(),
  contactPerson: Joi.string().min(1).max(255).required(), 
  email: Joi.string().email().required(), 
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required(),
  department: Joi.string().min(1).max(255).required(), 
  date: Joi.date().iso().required(), 
  time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required()
})

const contact = async (req, res, next) => {
    
    let connect = await getDB();

    try {
        let { companyName, businessActivity, contactPerson, email, phone, department, date, time } = req.body;

        await users.validateAsync(req.body)

        if (!companyName || !email || !phone) {
         throw newError('Los campos Company, Email & Phone no pueden ser vacíos', 411);
        }

        if (companyName && businessActivity && contactPerson && email && phone && department && date && time) {
            const validation = users.validate(companyName, businessActivity, contactPerson, email, phone, department, date, time)
            if (!validation.error) {
                console.log("Por favor verifique los datos y vuelva a intentarlo nuevamente");
                
            }
        }

        const id = await registerClient(companyName, businessActivity, contactPerson, email, phone, department, date, time);

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
    contact,
};

