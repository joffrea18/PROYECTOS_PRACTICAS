'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require("../../helps");
const express = require("express");
const Joi = require('joi');
const { registerSai } = require('../database/registerSai');

const data = Joi.object({
    fabricante: Joi.string().allow(''),
    modelo: Joi.string().allow(''),
    disp_conectados: Joi.string().allow(''),
    ip_vlan_cloud: Joi.string().allow(''),
    apuntes: Joi.string().allow(''),
});

const sai = async (req, res, next) => {
    let connect;

    try {
        let {
        fabricante,
        modelo,
        disp_conectados,
        ip_vlan_cloud,
        apuntes
        } = req.body;

        await data.validateAsync(req.body)

        const id = await registerSai(fabricante,
        modelo,
        disp_conectados,
        ip_vlan_cloud,
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
    sai,
}