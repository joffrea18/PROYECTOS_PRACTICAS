'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require("../../helps");
const express = require("express");
const Joi = require('joi');
const { registerErp } = require('../database/registerErp');

const data = Joi.object({
    fabricante: Joi.string().allow(''),
    proveedor: Joi.string().allow(''),
    apuntes: Joi.string().allow(''),
});

const erp = async (req, res, next) => {
    let connect;

    try {
        let {
        fabricante,
        proveedor,
        apuntes
        } = req.body;

        await data.validateAsync(req.body)

        const id = await registerErp(fabricante,
        proveedor,
        apuntes)
        res.send({
            status: 'ok',
            message: `Datos registrados en BBDD bajo el id ${id}`
        })
    } catch (error) {
        next(error)
    } finally{
        if(connect){
            connect.release();
        }
    }
};

module.exports = {
    erp,
}