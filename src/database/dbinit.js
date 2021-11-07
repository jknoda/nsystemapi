const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Empresa = require('../models/Empresa');
Empresa.init(connection);

const Usuario = require('../models/Usuario');
Usuario.init(connection);

const Aluno = require('../models/Aluno');
Aluno.init(connection);

module.exports = connection;