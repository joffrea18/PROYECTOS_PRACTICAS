'use strict'

const { getDB } = require("../database/getDB");
const { newError } = require("../../helps");
const express = require("express");
const Joi = require('joi');
const { registerAccessP } = require("../database");

const data = Joi.object({
    fabricante: Joi.string().allow(''),
    modelo: Joi.string().allow(''),
    gestion_aislada: Joi.boolean().allow(''),
    ssid_oculto: Joi.boolean().allow(''),
    apuntes: Joi.string().allow(''),
    wpa3_wpa2: Joi.boolean().allow(''),
    authent_radius: Joi.boolean().allow(''),
    segment_reclocales: Joi.boolean().allow(''),
    wps_wep_wpa: Joi.boolean().allow(''),
    desact_ssid: Joi.boolean().allow(''),
    cert_eap_tls: Joi.boolean().allow(''),
    control_mac: Joi.boolean().allow(''),
    wifi_invitados: Joi.boolean().allow(''),
    acces_vpnlocal: Joi.boolean().allow(''),
    implementacion_wips: Joi.boolean().allow(''),
    monitoreo_dispo: Joi.boolean().allow(''),
    costes: Joi.string().allow(''),
});

const accesspoint = async (req, res, next) => {
    let connect = await getDB();
    try {
        let {
        fabricante, modelo, gestion_aislada,
        control_mac, ssid_oculto, desact_ssid, authent_radius,
        implementacion_wips, monitoreo_dispo, acces_vpnlocal, wpa3_wpa2,
        wifi_invitados, segment_reclocales, wps_wep_wpa, cert_eap_tls,
        costes, apuntes
        } = req.body;

        await data.validateAsync(req.body)

        const id = await registerAccessP(
        fabricante, modelo, gestion_aislada,
        control_mac, ssid_oculto, desact_ssid, authent_radius,
        implementacion_wips, monitoreo_dispo, acces_vpnlocal, wpa3_wpa2,
        wifi_invitados, segment_reclocales, wps_wep_wpa, cert_eap_tls,
        costes, apuntes)
        res.send({
            status: 'ok',
            message: `Datos resgistrados correctamente bajo el id ${id}`
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
    accesspoint,
}