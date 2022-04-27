const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const Ocotipo = require('../models/OcoTipo')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            OcoTipo,
            OcoTipDes } = req.body;
        Ocotipo.create({EmpIdf,
            OcoTipo,
            OcoTipDes})
        .then(()=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'add',
                tabela:'ocotipo',
                dado:JSON.stringify(req.body)
            });                
            return res.json(OcoTipo);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async find(req,res){
        const {EmpIdf,OcoTipo} = req.body;
        const retorno = await Ocotipo.findOne({
            where : {EmpIdf, OcoTipo}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        var retorno = await Ocotipo.findAll({
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            OcoTipo,
            OcoTipDes} = req.body;
        await Ocotipo.update(
        {
            EmpIdf,
            OcoTipo,
            OcoTipDes
        },
        {
            where: {
                EmpIdf: EmpIdf,
                OcoTipo: OcoTipo
            }            
        }).then(()=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'ocotipo',
                dado:JSON.stringify(req.body)
            });                
            return res.json({OcoTipo});
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, OcoTipo} = req.body;
        const retorno = await Ocotipo.destroy({
            where : {EmpIdf, OcoTipo}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'ocotipo',
            dado:JSON.stringify(req.body)
        });                
        return res.json(retorno);
    }

}