const errDB = require('../common/_sendErrorsDB');
const ConsultaAtividades = require('../models/ConsultaAtividades')
const sequelize = require("sequelize");

module.exports = {
    async findMonthYear(req,res){
        const {EmpIdf, mes, ano} = req.body;
        var sql = `
            SELECT treino.EmpIdf ,treino.TreIdf,treino.TreData, treino.TreTitulo, treinoatv.AtvIdf, treinoatv.TreAtvDesc
            FROM treino  
            LEFT JOIN treinoatv
            ON treino.EmpIdf = treinoatv.EmpIdf AND treino.TreIdf = treinoatv.TreIdf
            WHERE treino.EmpIdf = ?`
          if (mes > 0)
          {
            sql = sql.concat(
              `
                AND MONTH(treino.TreData) = ? 
              `
            )
          }else{
            sql = sql.concat(
              `
                AND MONTH(treino.TreData) > ? 
              `
            )
          }
          let d = new Date();
          if (ano == d.getFullYear())
          {
            sql = sql.concat(
              `
                AND YEAR(treino.TreData) = ?
              `
            )
          }else{
            sql = sql.concat(
              `
                AND YEAR(treino.TreData) > ?
              `
            )
          }
          sql = sql.concat(
            `
              ORDER BY treino.TreData;
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

        retorno.forEach(function(item) {
            var existing = output.filter(function(v, i) {
              return v.TreIdf == item.TreIdf;
            });
            if (existing.length) {
              var existingIndex = output.indexOf(existing[0]);
              var itemAux = item.AtvIdf.toString() + "@@" + item.TreAtvDesc;
              output[existingIndex].TreAtvDesc = output[existingIndex].TreAtvDesc.concat(itemAux);
            } else {
              if (typeof item.TreAtvDesc == 'string'){
                var itemAux = item.AtvIdf.toString() + "@@" + item.TreAtvDesc;
                item.TreAtvDesc = [itemAux];
              }
              output.push(item);
            }
          });

        return res.json(output);
    },
}