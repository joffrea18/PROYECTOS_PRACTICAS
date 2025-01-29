'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require('../../helps');
const express = require("express");
const Joi = require('joi');
const { registerClient } = require("../database/registerClient");

const users = Joi.object({
  companyName: Joi.string().min(1).max(255).allow(''), 
  businessActivity: Joi.string().min(1).max(255).allow(''),
  contactPerson: Joi.string().min(1).max(255).allow(''), 
  email: Joi.string().email().allow(''), 
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).allow(''),
  department: Joi.string().min(1).max(255).allow(''), 
  date: Joi.date().iso().allow(''), 
  time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).allow('')
})

const contact = async (req, res, next) => {
    
    let connect = await getDB();

    try {
        let { companyName, businessActivity, contactPerson, email, phone, department, date, time } = req.body;

        await users.validateAsync(req.body)

        // if (!email || !phone) {
        //  throw newError('Los campos Email & Phone no pueden ser vacíos', 411);
        // }

        if (email && phone) {
            const validation = users.validate(email, phone)
            if (!validation.error) {
                console.log("Por favor verifique los datos email & telefono y vuelva a intentarlo nuevamente");
                
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

