'use strict'

const { getDB } = require("../../database/getDB");
const { newError } = require("../../../helps");
const express = require("express");
// const router
const http = require('http');

const firewall = ((req, res) => {

// Modificar la info que se manda a la BBDD
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    })
});

module.exports = firewall;


