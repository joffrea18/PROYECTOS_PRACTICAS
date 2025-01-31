'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require("../../helps");
const express = require("express");
const Joi = require('joi');
const { registerServidores } = require("../database");

const data = Joi.object ({
    fabricante: Joi.string().allow(''),
    modelo: Joi.string().allow(''),
    so: Joi.string().allow(''),
    copias_segu: Joi.string().allow(''),
    ips: Joi.string().allow(''),
    apuntes: Joi.string().allow(''),
})

const servidores = async (req, res, next) => {
    let connect = await getDB();

    try {
        let {
        fabricante,
        modelo,
        so,
        copias_segu,
        ips,
        apuntes
        } = req.body;

        await data.validateAsync(req.body)

        const id = await registerServidores(
            fabricante,
        modelo,
        so,
        copias_segu,
        ips,
        apuntes
        )
        res.send({
            status: 'ok',
            message: `Datos resistrados bajo el id: ${id}`
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
    servidores,
}