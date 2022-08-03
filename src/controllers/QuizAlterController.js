const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const QuizAlter = require('../models/QuizAltermativas')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            QuizIdf,
            QuizResposta,
            QuizCerta,
            QuizResCompl,
            UsuIdf} = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var QuizResSeq = 0;
        await QuizAlter.findOne({
            attributes: ['QuizResSeq'],
            where: {EmpIdf,QuizIdf},
            order: [[ 'QuizResSeq', 'DESC' ]]
        }).then((data)=>{
            QuizResSeq = data.QuizResSeq;
        }).catch(()=>{
            QuizResSeq = 0;
        }).finally(()=>{
            QuizResSeq++;
            QuizAlter.create({EmpIdf,
                QuizIdf,
                QuizResSeq,
                QuizResposta,
                QuizCerta,
                QuizResCompl,
                UsuIdf,
                DataInc,
                DataAlt})
            .then(()=>{
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'QuizAlter',
                    dado:JSON.stringify(req.body)
                });                
                return res.json(QuizResSeq);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,QuizIdf,QuizResSeq} = req.body;
        const retorno = await QuizAlter.findOne({
            where : {EmpIdf, QuizIdf, QuizResSeq}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf, QuizIdf} = req.body;
        const retorno = await QuizAlter.findAll({
            where : {EmpIdf,QuizIdf},
            order: ['EmpIdf', 'QuizIdf', 'QuizResSeq']
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
                QuizIdf,
                QuizResSeq,
                QuizResposta,
                QuizCerta,
                QuizResCompl,
                UsuIdf } = req.body;
        const DataAlt = new Date();
        await QuizAlter.update(
        {
            EmpIdf,
            QuizIdf,
            QuizResSeq,
            QuizResposta,
            QuizCerta,
            QuizResCompl,
            UsuIdf,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                QuizIdf: QuizIdf,
                QuizResSeq: QuizResSeq
            }            
        }).then((data)=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'QuizAlter',
                dado:JSON.stringify(req.body)
            });                
            return res.json(QuizResSeq);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, QuizIdf, QuizResSeq} = req.body;
        const retorno = await QuizAlter.destroy({
            where : {EmpIdf, QuizIdf, QuizResSeq}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'QuizAlter',
            dado:JSON.stringify(req.body)
        });                
        return res.json(retorno);
    }
}