'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require("../../helps");
const express = require("express");
const Joi = require('joi');
const { registerXdr } = require("../database");


const data = Joi.object({
    solucion_xdr: Joi.string().allow(''),
    proveedor: Joi.string().allow(''),
    firewall: Joi.boolean().allow(''),
    antimalware: Joi.boolean().allow(''),
    antiphishing: Joi.boolean().allow(''),
    antitampering: Joi.boolean().allow(''),
    aptprotection: Joi.boolean().allow(''),
    treath_hunting: Joi.boolean().allow(''),
    cifrado_datos: Joi.boolean().allow(''),
    remote_forensics: Joi.boolean().allow(''),
    sandbox_analyzer: Joi.boolean().allow(''),
    antiexploit_advance: Joi.boolean().allow(''),
    control_contenido: Joi.boolean().allow(''),
    control_app: Joi.boolean().allow(''),
    control_naveg: Joi.boolean().allow(''),
    analisis_web: Joi.boolean().allow(''),
    netw_att_def: Joi.boolean().allow(''),
    user_authoriz: Joi.boolean().allow(''),
    control_disp: Joi.boolean().allow(''),
    advan_treatC: Joi.boolean().allow(''),
    admin_risk: Joi.boolean().allow(''),
    analisis_comp: Joi.boolean().allow(''),
    email_protect: Joi.boolean().allow(''),
    ransomware: Joi.boolean().allow(''),
    pol_seguridad: Joi.boolean().allow(''),
    parches: Joi.boolean().allow(''),
    costes: Joi.string().allow(''),
    apuntes: Joi.string().allow(''),
});

const xdr = async (req, res, next) => {
    let connect = await getDB();

    try {
        let {
        solucion_xdr, proveedor, firewall,
        antimalware,antiphishing,antitampering,aptprotection,treath_hunting,cifrado_datos,remote_forensics,sandbox_analyzer,antiexploit_advance,control_contenido,control_app,control_naveg,analisis_web,netw_att_def,user_authoriz,control_disp,advan_treatC,admin_risk,analisis_comp,email_protect,ransomware,pol_seguridad,parches,costes,apuntes
        } = req.body;

        await data.validateAsync(req.body)

        const id = await registerXdr(
        solucion_xdr, proveedor, firewall,
        antimalware,antiphishing,antitampering,aptprotection,treath_hunting,cifrado_datos,remote_forensics,sandbox_analyzer,antiexploit_advance,control_contenido,control_app,control_naveg,analisis_web,netw_att_def,user_authoriz,control_disp,advan_treatC,admin_risk,analisis_comp,email_protect,ransomware,pol_seguridad,parches,costes,apuntes
        )
        res.send({
            status: 'ok',
            message: `Datos almacenados correctamente bajo el id ${id}`
        })
    } catch (error) {
        next(error)
    } finally {
        if (connect) connect.release();
    }
};

module.exports = {
    xdr,
}