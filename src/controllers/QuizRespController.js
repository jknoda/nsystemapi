const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const QuizResp = require('../models/QuizResp')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            QuizIdf,
            QuizRespEmail,
            QuizResSeq,
            UsuIdf,
            QuizNome,
            QuizRespAcerto} = req.body;
        const DataInc = new Date();
        var QuizRespIdf = 0;
        await QuizResp.findOne({
            attributes: ['QuizRespIdf'],
            where: {EmpIdf,QuizIdf},
            order: [[ 'QuizRespIdf', 'DESC' ]]
        }).then((data)=>{
            QuizRespIdf = data.QuizRespIdf;
        }).catch(()=>{
            QuizRespIdf = 0;
        }).finally(()=>{
            QuizRespIdf++;
            QuizResp.create({EmpIdf,
                QuizIdf,
                QuizRespIdf,
                QuizRespEmail,
                QuizResSeq,
                UsuIdf,
                QuizNome,
                QuizRespAcerto,
                DataInc})
            .then(()=>{
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'QuizResp',
                    dado:JSON.stringify(req.body)
                });                
                return res.json(QuizRespIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,QuizIdf,QuizRespIdf} = req.body;
        const retorno = await QuizResp.findOne({
            where : {EmpIdf, QuizIdf, QuizRespIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf, QuizIdf} = req.body;
        const retorno = await QuizResp.findAll({
            where : {EmpIdf,QuizIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
                QuizIdf,
                QuizRespIdf,
                QuizRespEmail,
                QuizResSeq,
                UsuIdf,
                QuizNome,
                QuizRespAcerto} = req.body;
        await QuizResp.update(
        {
            EmpIdf,
            QuizIdf,
            QuizRespIdf,
            QuizRespEmail,
            QuizResSeq,
            UsuIdf,
            QuizNome,
            QuizRespAcerto,
            QuizRespCompl
        },
        {
            where: {
                EmpIdf: EmpIdf,
                QuizIdf: QuizIdf,
                QuizRespIdf: QuizRespIdf
            }            
        }).then((data)=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'QuizResp',
                dado:JSON.stringify(req.body)
            });                
            return res.json(QuizRespIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, QuizIdf, QuizRespIdf} = req.body;
        const retorno = await QuizResp.destroy({
            where : {EmpIdf, QuizIdf, QuizRespIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'QuizResp',
            dado:JSON.stringify(req.body)
        });                
        return res.json(retorno);
    },

    async has(req,res){
        const {EmpIdf,QuizIdf,UsuIdf} = req.body;
        const retorno = await QuizResp.findOne({
            where : {EmpIdf, QuizIdf, UsuIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno != null);
    },
}