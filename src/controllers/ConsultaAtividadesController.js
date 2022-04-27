const errDB = require('../common/_sendErrorsDB');
const ConsultaAtividades = require('../models/ConsultaAtividades')
const sequelize = require("sequelize");

module.exports = {
    async findMonthYear(req,res){
        const {EmpIdf, mes, ano} = req.body;
        var sql = `
            SELECT treino."EmpIdf" ,treino."TreIdf",treino."TreData", 
              treino."TreTitulo", treino."TreResponsavel",
              treinoatv."AtvIdf", treinoatv."TreAtvDesc",
              treinoatv."TreAtvMin"
            FROM yamazaki.treino  
            LEFT JOIN yamazaki.treinoatv
            ON treino."EmpIdf" = treinoatv."EmpIdf" AND treino."TreIdf" = treinoatv."TreIdf"
            WHERE treino."EmpIdf" = ?`
          if (mes > 0)
          {
            sql = sql.concat(
              `
                AND EXTRACT(MONTH FROM treino."TreData") = ? 
              `
            )
          }else{
            sql = sql.concat(
              `
                AND EXTRACT(MONTH FROM treino."TreData") > ? 
              `
            )
          }
          let d = new Date();
          if (ano == d.getFullYear())
          {
            sql = sql.concat(
              `
                AND EXTRACT(YEAR FROM treino."TreData") = ?
              `
            )
          }else{
            sql = sql.concat(
              `
                AND EXTRACT(YEAR FROM treino."TreData") > ?
              `
            )
          }
          sql = sql.concat(
            `
              ORDER BY treino."TreData";
            `
          );
        retorno = await ConsultaAtividades.sequelize.query(sql, {
            replacements: [
              EmpIdf,
              mes,
              ano
            ],
            type: sequelize.QueryTypes.SELECT
        }).catch(function(err){
            return errDB(res,err);
        });

        var output = [];
        if (retorno.length > 0){
          retorno.forEach(function(item) {
              var existing = output.filter(function(v, i) {
                return v.TreIdf == item.TreIdf;
              });
              if (existing.length) {
                var existingIndex = output.indexOf(existing[0]);
                var itemAux = item.AtvIdf.toString() + "@@" + item.TreAtvDesc + "@@" + item.TreAtvMin.toString();
                output[existingIndex].TreAtvDesc = output[existingIndex].TreAtvDesc.concat(itemAux);
              } else {
                if (typeof item.TreAtvDesc == 'string'){
                  var itemAux = item.AtvIdf.toString() + "@@" + item.TreAtvDesc + "@@" + item.TreAtvMin.toString();
                  item.TreAtvDesc = [itemAux];
                }
                output.push(item);
              }
          });
        }

        return res.json(output);
    },
}