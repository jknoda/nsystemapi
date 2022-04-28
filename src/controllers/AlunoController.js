const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const Aluno = require('../models/Aluno');
const Anamnese = require('../models/Anamnese');
const { Op } = require("sequelize");
const { json } = require('express/lib/response');

module.exports = {
    async create(req,res){
        const {EmpIdf,
            AluNome,
            AluCPF,
            AluDataNasc,
            AluNomeResp,
            AluFoneResp,
            AluFone,
            AluLogradouro,
            AluLogNum,
            AluBairro,
            AluCidade,
            AluUF,
            AluEmail,
            AluPeso,
            AluAltura,
            AluStatus,
            UsuIdf,
            AluTPri,
            AluTImg,
            AluFoto,
            AluCEP,
            AluCompl } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var AluIdf = 0;
        await Aluno.findOne({
            attributes: ['AluIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'AluIdf', 'DESC' ]]
        }).then((data)=>{
            AluIdf = data.AluIdf;
        }).catch(()=>{
            AluIdf = 0;
        }).finally(()=>{
            AluIdf++;
            Aluno.create({EmpIdf,
                AluIdf,
                AluNome,
                AluCPF,
                AluDataNasc,
                AluNomeResp,
                AluFoneResp,
                AluFone,
                AluLogradouro,
                AluLogNum,
                AluBairro,
                AluCidade,
                AluUF,
                AluEmail,
                AluPeso,
                AluAltura,
                AluStatus,
                UsuIdf,
                AluTPri,
                AluTImg,
                AluFoto,
                AluCEP,
                AluCompl,
                DataInc,
                DataAlt})
            .then(()=>{
                let aux = req.body;
                delete aux.AluFoto;
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'aluno',
                    dado:JSON.stringify(aux)
                });
                return res.json(AluIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,AluIdf} = req.body;
        const retorno = await Aluno.findOne({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await Aluno.findAll({
            attributes: {exclude: ['AluFoto']},
            where : {EmpIdf},
            order: ['AluNome']
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findallstatus(req,res){
        const {EmpIdf,AluStatus} = req.body;
        const retorno = await Aluno.findAll({
            attributes: {exclude: ['AluFoto']},
            where : {
                EmpIdf,
                AluStatus
            },
            order: ['AluNome']
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findallresp(req,res){
        const {EmpIdf,AluStatus,UsuIdf} = req.body;
        let usuIni = UsuIdf;
        let usuFim = UsuIdf;
        if (UsuIdf == 0)
        {
            usuIni = 0;
            usuFim = 99999999990;
        }
        const retorno = await Aluno.findAll({
            attributes: {exclude: ['AluFoto']},
            where : {
                EmpIdf,
                AluStatus,
                UsuIdf: {
                    [Op.gte]: usuIni,
                    [Op.lte]: usuFim
                  }
            },
            order: ['AluNome']
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            AluIdf,
            AluNome,
            AluCPF,
            AluDataNasc,
            AluNomeResp,
            AluFoneResp,
            AluFone,
            AluLogradouro,
            AluLogNum,
            AluBairro,
            AluCidade,
            AluUF,
            AluEmail,
            AluPeso,
            AluAltura,
            AluStatus,
            UsuIdf,
            AluTPri,
            AluTImg,
            AluFoto,
            AluCEP,
            AluCompl  } = req.body;
        const DataAlt = new Date();
        await Aluno.update(
        {
            AluNome,
            AluCPF,
            AluDataNasc,
            AluNomeResp,
            AluFoneResp,
            AluFone,
            AluLogradouro,
            AluLogNum,
            AluBairro,
            AluCidade,
            AluUF,
            AluEmail,
            AluPeso,
            AluAltura,
            AluStatus,
            UsuIdf,
            AluTPri,
            AluTImg,
            AluFoto,
            AluCEP,
            AluCompl,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                AluIdf: AluIdf
            }            
        }).then((data)=>{
            let aux = req.body;
            delete aux.AluFoto;
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'aluno',
                dado:JSON.stringify(aux)
            });
            return res.json(AluIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async status(req,res){
        const {EmpIdf,
            AluIdf,
            AluStatus} = req.body;
        const DataAlt = new Date();
        await Aluno.update(
        {
            AluStatus,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                AluIdf: AluIdf
            }            
        }).then((data)=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update status',
                tabela:'aluno',
                dado:JSON.stringify(req.body)
            });
            return res.json(AluIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, AluIdf} = req.body;
        const retorno = await Aluno.destroy({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'aluno',
            dado:JSON.stringify(req.body)
        });
        return res.json(retorno);
    },

    async deletealuno(req,res){
        const {EmpIdf, AluIdf} = req.body;
        await Anamnese.destroy({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        await Aluno.destroy({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'aluno/anamnese',
            dado:JSON.stringify(req.body)
        });        
        return res.json("OK");
    }

}