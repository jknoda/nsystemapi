const errDB = require('../common/_sendErrorsDB');
const TreinoAlu = require('../models/TreinoAlu')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            TreIdf,
            AluIdf,
            TreAluNome,
            TreAluObs} = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        await TreinoAlu.create({EmpIdf,
            TreIdf,
            AluIdf,
            TreAluNome,
            TreAluObs,
            DataInc,
            DataAlt})
        .then(()=>{
            return res.json(AluIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async find(req,res){
        const {EmpIdf,TreIdf,AluIdf} = req.body;
        const retorno = await TreinoAlu.findOne({
            where : {EmpIdf, TreIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf, TreIdf} = req.body;
        const retorno = await TreinoAlu.findAll({
            where : {EmpIdf,TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            TreIdf,
            AluIdf,
            TreAluNome,
            TreAluObs} = req.body;
        const DataAlt = new Date();
        await TreinoAlu.update(
        {
            EmpIdf,
            TreIdf,
            AluIdf,
            TreAluNome,
            TreAluObs,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                TreIdf: TreIdf,
                AluIdf: AluIdf
            }            
        }).then((data)=>{
                return res.json(AluIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, TreIdf, AluIdf} = req.body;
        const retorno = await TreinoAlu.destroy({
            where : {EmpIdf, TreIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }
}