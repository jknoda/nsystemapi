const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const JudoCard = require('../models/JudoCard')
const sequelize = require("sequelize");

module.exports = {
    async create(req,res){
        const {CatIdf,
            ClasIdf,
            Desafio,
            Imagem,
            Resposta,
            CardIdf} = req.body;
        const DataInc = new Date();
        var Idf = 0;
        await JudoCard.findOne({
            attributes: ['Idf'],
            order: [[ 'Idf', 'DESC' ]]
        }).then((data)=>{
            Idf = data.Idf;
        }).catch(()=>{
            Idf = 0;
        }).finally(()=>{
            Idf++;
            JudoCard.create({Idf,
                CatIdf,
                ClasIdf,
                Desafio,
                Imagem,
                Resposta,
                CardIdf,
                DataInc})
            .then(()=>{
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'JudoCard',
                    dado:JSON.stringify(req.body)
                });                
                return res.json(Idf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {Idf} = req.body;
        const retorno = await JudoCard.findOne({
            where : {Idf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },
   

    async findall(req,res){
		var sql = `
			SELECT 
				judocard."Idf", 
				judocard."CatIdf", 
				judocard."ClasIdf", 
				judocard."Desafio", 
                judocard."Imagem", 
                judocard."Resposta", 
                judocard."DataInc", 
                judocard."CardIdf", 
				judocardcat."CatDes",
				judocardclas."ClasDes"
			FROM yamazaki.judocard
			INNER JOIN yamazaki.judocardcat ON
			judocard."CatIdf" = judocardcat."CatIdf"
			INNER JOIN yamazaki.judocardclas ON
			judocard."ClasIdf" = judocardclas."ClasIdf"
            ORDER BY judocard."Idf"
		`;
        retorno = await JudoCard.sequelize
        .query(sql,{type: sequelize.QueryTypes.SELECT})
        .catch(function(err){
            return errDB(res,err);
        });			
		
        return res.json(retorno);
    },

    async update(req,res){
        const {Idf,
            CatIdf,
            ClasIdf,
            Desafio,
            Imagem,
            Resposta,
            CardIdf} = req.body;
        await JudoCard.update(
        {
            CatIdf,
            ClasIdf,
            Desafio,
            Imagem,
            Resposta,
            CardIdf
        },
        {
            where: {
                Idf: Idf
            }            
        }).then((data)=>{
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'JudoCard',
                dado:JSON.stringify(req.body)
            });                
            return res.json(Idf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {Idf} = req.body;
        const retorno = await JudoCard.destroy({
            where : {Idf}
        }).catch(function(err){
            return errDB(res,err);
        });
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'JudoCard',
            dado:JSON.stringify(req.body)
        });                
        return res.json(retorno);
    }
}