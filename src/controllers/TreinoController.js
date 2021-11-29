const errDB = require('../common/_sendErrorsDB');
const Treino = require('../models/Treino')
const TreinoAlu = require('../models/TreinoAlu')
const TreinoAtv = require('../models/TreinoAtv')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            TreTipo,
            TreData,
            TreTitulo,
            TreResponsavel,
            TreObs } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var TreIdf = 0;
        await Treino.findOne({
            attributes: ['TreIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'TreIdf', 'DESC' ]]
        }).then((data)=>{
            TreIdf = data.TreIdf;
        }).catch(()=>{
            TreIdf = 0;
        }).finally(()=>{
            TreIdf++;
            Treino.create({EmpIdf,
                TreIdf,
                TreTipo,
                TreData,
                TreTitulo,
                TreResponsavel,
                TreObs,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(TreIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,TreIdf} = req.body;
        const retorno = await Treino.findOne({
            where : {EmpIdf, TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await Treino.findAll({
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            TreIdf,
            TreTipo,
            TreData,
            TreTitulo,
            TreResponsavel,
            TreObs } = req.body;
        const DataAlt = new Date();
        await Treino.update(
        {
            EmpIdf,            
            TreIdf,
            TreTipo,
            TreData,
            TreTitulo,
            TreResponsavel,
            TreObs,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                TreIdf: TreIdf
            }            
        }).then((data)=>{
                return res.json(TreIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, TreIdf} = req.body;
        const retorno = await Treino.destroy({
            where : {EmpIdf, TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async deletetreino(req,res){
        const {EmpIdf, TreIdf} = req.body;

        await TreinoAlu.destroy({
            where : {EmpIdf, TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });

        await TreinoAtv.destroy({
            where : {EmpIdf, TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });

        await Treino.destroy({
            where : {EmpIdf, TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json("OK");
    }
}