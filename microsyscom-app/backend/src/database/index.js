'use strict'

const { getDB } = require('./getDB');
const { registerBusiness } = require('./registerBusiness');
const { registerRouter } = require('./registerRouter');
const { registerClient } = require('./registerClient');
const { registerFirewall } = require('./registerFirewall');
const { registerSwitch } = require('./registerSwitch');
const { registerAccessP } = require('./registerAccessP');
const { registerXdr } = require('./registerXdr');

module.exports = {
    getDB,
    registerBusiness,
    registerRouter,
    registerClient,
    registerFirewall,
    registerSwitch,
    registerAccessP,
    registerXdr,
};