const errDB = require('../common/_sendErrorsDB');
const Configuracao = require('../models/Configuracao')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            CfgDesc,
            CfgVlrNum,
            CfgVlrStr,
            CfgVlrDat } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var CfgIdf = 0;
        await Configuracao.findOne({
            attributes: ['CfgIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'CfgIdf', 'DESC' ]]
        }).then((data)=>{
            CfgIdf = data.CfgIdf;
        }).catch(()=>{
            CfgIdf = 0;
        }).finally(()=>{
            CfgIdf++;
            Configuracao.create({EmpIdf,
                CfgIdf,
                CfgDesc,
                CfgVlrNum,
                CfgVlrStr,
                CfgVlrDat,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(CfgIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,CfgIdf} = req.body;
        const retorno = await Configuracao.findOne({
            where : {EmpIdf, CfgIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await Configuracao.findAll({
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findarray(req,res){
        const {EmpIdf, CfgIdfArray} = req.body;
        const retorno = await Configuracao.findAll({
            where : {
                EmpIdf,
                CfgIdf: CfgIdfArray
            }
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            CfgIdf,
            CfgDesc,
            CfgVlrNum,
            CfgVlrStr,
            CfgVlrDat } = req.body;
        const DataAlt = new Date();
        await Configuracao.update(
        {
            EmpIdf,
            CfgIdf,
            CfgDesc,
            CfgVlrNum,
            CfgVlrStr,
            CfgVlrDat,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                CfgIdf: CfgIdf
            }            
        }).then((data)=>{
                return res.json(CfgIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, CfgIdf} = req.body;
        const retorno = await Configuracao.destroy({
            where : {EmpIdf, CfgIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }

}