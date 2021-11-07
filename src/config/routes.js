const express = require('express');

module.exports = function (server) {
    const api = express.Router();
    server.use('/api', api);

    const UsuarioController = require('../controllers/Usuario/UsuarioController');
    api.post('/usuario/create', UsuarioController.create);
    api.post('/usuario/finduser', UsuarioController.finduser);
    api.post('/usuario/find', UsuarioController.find);
    api.post('/usuario/update', UsuarioController.update);

    const AlunoController = require('../controllers/Aluno/AlunoController');
    api.post('/aluno/create', AlunoController.create);
    api.post('/aluno/findall', AlunoController.findall);
    api.post('/aluno/find', AlunoController.find);
    api.post('/aluno/update', AlunoController.update);
    api.post('/aluno/delete', AlunoController.delete);

    /*
    /*
    * API Públicas - rotas abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const TesteController = require('../controllers/General/TesteController');
    openApi.get('/teste', TesteController.teste);

    
}
