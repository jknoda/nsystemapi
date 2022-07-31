const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const Empresa = require('../models/Empresa');
Empresa.init(connection);

const Usuario = require('../models/Usuario');
Usuario.init(connection);

const Aluno = require('../models/Aluno');
Aluno.init(connection);

const Atividade = require('../models/Atividade');
Atividade.init(connection);

const Treino = require('../models/Treino');
Treino.init(connection);

const TreinoAtv = require('../models/TreinoAtv');
TreinoAtv.init(connection);

const TreinoAlu = require('../models/TreinoAlu');
TreinoAlu.init(connection);

const Anamnese = require('../models/Anamnese');
Anamnese.init(connection);

const ConsultaAtividades = require('../models/ConsultaAtividades');
ConsultaAtividades.init(connection);

const Mensagem = require('../models/Mensagem');
Mensagem.init(connection);

const Configuracao = require('../models/Configuracao');
Configuracao.init(connection);

const OcoTipo = require('../models/OcoTipo');
OcoTipo.init(connection);

const Ocorrencia = require('../models/Ocorrencia');
Ocorrencia.init(connection);

const News = require('../models/News');
News.init(connection);

const Acesso = require('../models/Acesso');
Acesso.init(connection);

const Logdata = require('../models/Logdata');
Logdata.init(connection);

const AluResp = require('../models/AluResp');
AluResp.init(connection);

const Quiz = require('../models/Quiz');
Quiz.init(connection);

const QuizAlternativas = require('../models/QuizAltermativas');
QuizAlternativas.init(connection);

const QuizResp = require('../models/QuizResp');
QuizResp.init(connection);

const JudoCard = require('../models/JudoCard');
JudoCard.init(connection);

module.exports = connection;