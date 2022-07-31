const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const Quiz = require('../models/Quiz')
const QuizAlter = require('../models/QuizAltermativas')
const QuizResp = require('../models/QuizResp');

module.exports = {
    async create(req,res){
        const {EmpIdf,
            QuizPergunta,
            QuizData,
            UsuIdf,
            QuizLiberado,
            QuizDataIni,
            QuizDataFim,
            QuizImagem} = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var QuizIdf = 0;
        await Quiz.findOne({
            attributes: ['QuizIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'QuizIdf', 'DESC' ]]
        }).then((data)=>{
            QuizIdf = data.QuizIdf;
        }).catch(()=>{
            QuizIdf = 0;
        }).finally(()=>{
            QuizIdf++;
            Quiz.create({EmpIdf,
                QuizIdf,
                QuizPergunta,
                QuizData,
                UsuIdf,
                QuizLiberado,
                QuizDataIni,
                QuizDataFim,
                QuizImagem,
                DataInc,
                DataAlt})
            .then(()=>{
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'Quiz',
                    dado:JSON.stringify(req.body)
                });                
                return res.json(QuizIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,QuizIdf} = req.body;
        const retorno = await Quiz.findOne({
            where : {EmpIdf, QuizIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await Quiz.findAll({
            attributes: {exclude: ['QuizImagem']},
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            QuizIdf,
            QuizPergunta,
            QuizData,
            UsuIdf,
            QuizLiberado,
            QuizDataIni,
            QuizDataFim,
            QuizImagem } = req.body;
        const DataAlt = new Date();
        await Quiz.update(
        {
            EmpIdf,            
            QuizIdf,
            QuizPergunta,
            QuizData,
            UsuIdf,
            QuizLiberado,
            QuizDataIni,
            QuizDataFim,
            QuizImagem,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                QuizIdf: QuizIdf
            }            
        }).then((data)=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'Quiz',
                dado:JSON.stringify(req.body)
            });                
            return res.json(QuizIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, TreIdf} = req.body;
        const retorno = await Quiz.destroy({
            where : {EmpIdf, QuizIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'Quiz',
            dado:JSON.stringify(req.body)
        });                
        return res.json(retorno);
    },

    async deleteQuiz(req,res){
        const {EmpIdf, QuizIdf} = req.body;

        await QuizResp.destroy({
            where : {EmpIdf, QuizIdf}
        }).catch(function(err){
            return errDB(res,err);
        });

        await QuizAlter.destroy({
            where : {EmpIdf, QuizIdf}
        }).catch(function(err){
            return errDB(res,err);
        });

        await Quiz.destroy({
            where : {EmpIdf, QuizIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'QuizResp/QuizAlter/Quiz',
            dado:JSON.stringify(req.body)
        });                
        return res.json("OK");
    }
}