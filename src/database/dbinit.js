const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Empresa = require('../models/Empresa/Empresa');
Empresa.init(connection);

const Usuario = require('../models/Usuario/Usuario');
Usuario.init(connection);


module.exports = connection;