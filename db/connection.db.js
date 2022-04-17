const { Sequelize } = require('sequelize');
const test = require('./connectionTest.db');
const config = require("../config/config.js");
const { db: { database, user, password, host, dialect } } = config;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect
});

test(sequelize);
module.exports = sequelize;
