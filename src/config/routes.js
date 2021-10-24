const express = require('express');

module.exports = function (server) {
    /*
    /*
    * API Públicas - rotas abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const TesteController = require('../controllers/General/TesteController');
    openApi.get('/teste', TesteController.teste);

    
}

