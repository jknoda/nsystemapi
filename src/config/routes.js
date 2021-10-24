const express = require('express');

module.exports = function (server) {
    const api = express.Router();
    server.use('/api', api);

    const UsuarioController = require('../controllers/Usuario/UsuarioController');
    api.post('/usuario/finduser', UsuarioController.finduser);

    /*
    /*
    * API Públicas - rotas abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const TesteController = require('../controllers/General/TesteController');
    openApi.get('/teste', TesteController.teste);

    
}

