'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require("../../helps");
const express = require("express");
const Joi = require('joi');
const { registerFirewall } = require("../database");

const data = Joi.object({
    fabricante: Joi.string().allow(''),
    modelo: Joi.string().allow(''),
    licencia: Joi.boolean().allow(''),
    acces_uiexterior: Joi.boolean().allow(''),
    acces_uinterior: Joi.boolean().allow(''),
    sis_alertslogin: Joi.boolean().allow(''),
    vpn_mfa: Joi.boolean().allow(''),
    serv_antimalware: Joi.boolean().allow(''),
    ips: Joi.boolean().allow(''),
    sandboxing: Joi.boolean().allow(''),
    email_security: Joi.boolean().allow(''), 
    detect_response: Joi.boolean().allow(''),
    ssl_inspection: Joi.boolean().allow(''),
    segmen_vlans: Joi.boolean().allow(''),
    cert_confiable: Joi.boolean().allow(''),
    automatic_backup: Joi.boolean().allow(''),
    monit_dispositivo: Joi.boolean().allow(''),
    vpn_limitadogeo: Joi.boolean().allow(''),
    costes: Joi.string().allow(''),
    fil_reputacion: Joi.boolean().allow(''),
});

const firewall = async (req, res, next) => {
    let connect = await getDB();
    try {
        let { fabricante, modelo, ips, licencia,
            sandboxing, email_security, ssl_inspection, sis_alertslogin,
            serv_antimalware, fil_reputacion, detect_response, cert_confiable, 
            monit_dispositivo, segmen_vlans, acces_uiexterior, acces_uinterior, 
            vpn_mfa, automatic_backup, vpn_limitadogeo, costes
        } = req.body;

        await data.validateAsync(req.body)

        if (email_security) {
            const validation = data.validate(email_security)
            if (!validation.error) {
                console.log("Por favor verifique el email de seguridad indicado y vuelva a intentarlo nuevamente"); 
            }
        }

        const id = await registerFirewall(fabricante, modelo, ips, licencia,
        sandboxing, email_security, ssl_inspection, sis_alertslogin,
        serv_antimalware, fil_reputacion, detect_response, cert_confiable, 
        monit_dispositivo, segmen_vlans, acces_uiexterior, acces_uinterior, 
        vpn_mfa, automatic_backup, vpn_limitadogeo, costes)
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
    firewall,
};


