const express = require('express');

module.exports = function (server) {
    const api = express.Router();
    server.use('/api', api);

    const UsuarioController = require('../controllers/UsuarioController');
    api.post('/usuario/create', UsuarioController.create);
    api.post('/usuario/finduser', UsuarioController.finduser);
    api.post('/usuario/find', UsuarioController.find);
    api.post('/usuario/findall', UsuarioController.findall);
    api.post('/usuario/update', UsuarioController.update);
    api.post('/usuario/delete', UsuarioController.delete);

    const AlunoController = require('../controllers/AlunoController');
    api.post('/aluno/create', AlunoController.create);
    api.post('/aluno/findall', AlunoController.findall);
    api.post('/aluno/findallstatus', AlunoController.findallstatus);
    api.post('/aluno/find', AlunoController.find);
    api.post('/aluno/findallresp', AlunoController.findallresp);
    api.post('/aluno/update', AlunoController.update);
    api.post('/aluno/status', AlunoController.status);
    api.post('/aluno/delete', AlunoController.delete);
    api.post('/aluno/deletealuno', AlunoController.deletealuno);

    const AluRespController = require('../controllers/AluRespController');
    api.post('/aluresp/create', AluRespController.create);
    api.post('/aluresp/findall', AluRespController.findall);
    api.post('/aluresp/find', AluRespController.find);
    api.post('/aluresp/findallusu', AluRespController.findallusu);
    api.post('/aluresp/update', AluRespController.update);
    api.post('/aluresp/delete', AluRespController.delete);

    const AtividadeController = require('../controllers/AtividadeController');
    api.post('/atividade/create', AtividadeController.create);
    api.post('/atividade/findall', AtividadeController.findall);
    api.post('/atividade/find', AtividadeController.find);
    api.post('/atividade/update', AtividadeController.update);
    api.post('/atividade/delete', AtividadeController.delete);

    const TreinoController = require('../controllers/TreinoController');
    api.post('/treino/create', TreinoController.create);
    api.post('/treino/findall', TreinoController.findall);
    api.post('/treino/findalldate', TreinoController.findalldate);
    api.post('/treino/find', TreinoController.find);
    api.post('/treino/update', TreinoController.update);
    api.post('/treino/delete', TreinoController.delete);
    api.post('/treino/deletetreino', TreinoController.deletetreino);

    const TreinoAtvController = require('../controllers/TreinoAtvController');
    api.post('/treinoAtv/create', TreinoAtvController.create);
    api.post('/treinoAtv/findall', TreinoAtvController.findall);
    api.post('/treinoAtv/findallordem', TreinoAtvController.findallordem);
    api.post('/treinoAtv/find', TreinoAtvController.find);
    api.post('/treinoAtv/update', TreinoAtvController.update);
    api.post('/treinoAtv/delete', TreinoAtvController.delete);

    const TreinoAluController = require('../controllers/TreinoAluController');
    api.post('/treinoalu/create', TreinoAluController.create);
    api.post('/treinoalu/findall', TreinoAluController.findall);
    api.post('/treinoalu/find', TreinoAluController.find);
    api.post('/treinoalu/update', TreinoAluController.update);
    api.post('/treinoalu/delete', TreinoAluController.delete);

    const AnamneseController = require('../controllers/AnamneseController');
    api.post('/anamnese/create', AnamneseController.create);
    api.post('/anamnese/findall', AnamneseController.findall);
    api.post('/anamnese/find', AnamneseController.find);
    api.post('/anamnese/findlast', AnamneseController.findlast);
    api.post('/anamnese/update', AnamneseController.update);
    api.post('/anamnese/delete', AnamneseController.delete);
    api.post('/anamnese/has', AnamneseController.has);

    const ConsultaAtividadesController = require('../controllers/ConsultaAtividadesController');
    api.post('/consulta/findmonthyear', ConsultaAtividadesController.findMonthYear);

    const MensagemController = require('../controllers/MensagemController');
    api.post('/mensagem/create', MensagemController.create);
    api.post('/mensagem/createresp', MensagemController.createresp);
    api.post('/mensagem/findall', MensagemController.findall);
    api.post('/mensagem/find', MensagemController.find);
    api.post('/mensagem/update', MensagemController.update);
    api.post('/mensagem/delete', MensagemController.delete);

    const EmailController = require('../controllers/MailController');
    api.post('/email/enviar', EmailController.enviar);

    const ConfiguracaoController = require('../controllers/ConfiguracaoController');
    api.post('/configuracao/create', ConfiguracaoController.create);
    api.post('/configuracao/findall', ConfiguracaoController.findall);
    api.post('/configuracao/findarray', ConfiguracaoController.findarray);
    api.post('/configuracao/find', ConfiguracaoController.find);
    api.post('/configuracao/update', ConfiguracaoController.update);
    api.post('/configuracao/delete', ConfiguracaoController.delete);

    const OcotipoController = require('../controllers/OcotipoController');
    api.post('/ocotipo/create', OcotipoController.create);
    api.post('/ocotipo/findall', OcotipoController.findall);
    api.post('/ocotipo/find', OcotipoController.find);
    api.post('/ocotipo/update', OcotipoController.update);
    api.post('/ocotipo/delete', OcotipoController.delete);

    const OcorrenciaController = require('../controllers/OcorrenciaController');
    api.post('/ocorrencia/create', OcorrenciaController.create);
    api.post('/ocorrencia/findall', OcorrenciaController.findall);
    api.post('/ocorrencia/find', OcorrenciaController.find);
    api.post('/ocorrencia/update', OcorrenciaController.update);
    api.post('/ocorrencia/delete', OcorrenciaController.delete);

    api.post('/ocorrencia/findalutre', OcorrenciaController.findalutre);
    api.post('/ocorrencia/findaluall', OcorrenciaController.findaluall);

    const NewsController = require('../controllers/NewsController');
    api.get('/news/getfindall', NewsController.getfindall);
    api.post('/news/create', NewsController.create);
    api.post('/news/findall', NewsController.findall);    
    api.post('/news/find', NewsController.find);
    api.post('/news/update', NewsController.update);
    api.post('/news/delete', NewsController.delete);

    const QuizController = require('../controllers/QuizController');
    api.post('/quiz/create', QuizController.create);
    api.post('/quiz/findall', QuizController.findall);
    api.post('/quiz/find', QuizController.find);
    api.post('/quiz/update', QuizController.update);
    api.post('/quiz/delete', QuizController.deleteQuiz);
    api.post('/quiz/findresp', QuizController.findresp);
    
    const QuizAlterController = require('../controllers/QuizAlterController');
    api.post('/quizalter/create', QuizAlterController.create);
    api.post('/quizalter/findall', QuizAlterController.findall);
    api.post('/quizalter/find', QuizAlterController.find);
    api.post('/quizalter/update', QuizAlterController.update);
    api.post('/quizalter/delete', QuizAlterController.delete);

    const QuizRespController = require('../controllers/QuizRespController');
    api.post('/quizresp/create', QuizRespController.create);
    api.post('/quizresp/findall', QuizRespController.findall);
    api.post('/quizresp/find', QuizRespController.find);
    api.post('/quizresp/update', QuizRespController.update);
    api.post('/quizresp/delete', QuizRespController.delete);    
    api.post('/quizresp/has', QuizRespController.has);   
    
    const JudocardController = require('../controllers/JudoCardController');
    api.post('/judocard/create', JudocardController.create);
    api.post('/judocard/findall', JudocardController.findall);
    api.post('/judocard/find', JudocardController.find);
    api.post('/judocard/update', JudocardController.update);
    api.post('/judocard/delete', JudocardController.delete);    

    const AcessoController = require('../controllers/AcessoController');
    api.post('/acesso/create', AcessoController.create);

    const LogdataController = require('../controllers/LogdataController');
    api.post('/logdata/create', LogdataController.create);

    /*
    /*
    * API Públicas - rotas abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const TesteController = require('../controllers/TesteController');
    openApi.get('/teste', TesteController.teste);

    
}

