const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const AluResp = require('../models/AluResp');
const sequelize = require("sequelize");

module.exports = {
    async create(req,res){
        const {EmpIdf,
            AluIdf,
            UsuIdf,
            AluRespObs} = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        await AluResp.create({EmpIdf,
            AluIdf,
            UsuIdf,
            AluRespObs,
            DataInc,
            DataAlt})
        .then(()=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'add',
                tabela:'aluresp',
                dado:JSON.stringify(req.body)
            });                
            return res.json(UsuIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async find(req,res){
        const {EmpIdf,AluIdf,UsuIdf} = req.body;
        const retorno = await AluResp.findOne({
            where : {EmpIdf, AluIdf, UsuIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf, AluIdf} = req.body;
        const retorno = await AluResp.findAll({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findallusu(req,res){
        const {EmpIdf,AluIdf} = req.body;
		var sql = `
			SELECT 
				aluresp."EmpIdf", 
				aluresp."AluIdf", 
				aluresp."UsuIdf", 
				aluresp."AluRespObs", 
				usuario."UsuNome",
				usuario."UsuEmail"
			FROM yamazaki.aluresp
			INNER JOIN yamazaki.usuario ON
			usuario."EmpIdf" = aluresp."EmpIdf"
			AND usuario."UsuIdf" = aluresp."UsuIdf"
			Where aluresp."EmpIdf" = ?
			AND aluresp."AluIdf" = ?
		`;
        retorno = await AluResp.sequelize.query(sql, {
            replacements: [
              EmpIdf,
			  AluIdf
            ],
            type: sequelize.QueryTypes.SELECT
        }).catch(function(err){
            return errDB(res,err);
        });		
		
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            AluIdf,
            UsuIdf,
            AluRespObs} = req.body;
        const DataAlt = new Date();
        await AluResp.update(
        {
            EmpIdf,
            AluIdf,
            UsuIdf,
            AluRespObs,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                AluIdf: AluIdf,
                UsuIdf: UsuIdf
            }            
        }).then((data)=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'aluresp',
                dado:JSON.stringify(req.body)
            });                
            return res.json(UsuIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, AluIdf, UsuIdf} = req.body;
        const retorno = await AluResp.destroy({
            where : {EmpIdf, AluIdf, UsuIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'aluresp',
            dado:JSON.stringify(req.body)
        });                
        return res.json(retorno);
    }
}