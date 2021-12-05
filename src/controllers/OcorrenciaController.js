const errDB = require('../common/_sendErrorsDB');
const Ocorrencia = require('../models/Ocorrencia')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            TreIdf,
            OcoTipo,
            AluIdf,
            OcoDescricao,
            UsuIdf } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var OcoIdf = 0;
        await Ocorrencia.findOne({
            attributes: ['OcoIdf'],
            where: {
                EmpIdf:EmpIdf,
                TreIdf:TreIdf
            },
            order: [
                [ 'OcoIdf', 'DESC' ],
            ]
        }).then((data)=>{
            OcoIdf = data.OcoIdf;
        }).catch(()=>{
            OcoIdf = 0;
        }).finally(()=>{
            OcoIdf++;
            Ocorrencia.create({EmpIdf,
                TreIdf,
                OcoIdf,
                OcoTipo,
                AluIdf,
                OcoDescricao,
                UsuIdf,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(OcoIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf, TreIdf} = req.body;
        const retorno = await Ocorrencia.findOne({
            where : {EmpIdf, TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findalutre(req,res){
        const {EmpIdf, TreIdf} = req.body;
        const retorno = await Ocorrencia.findall({
            where : {EmpIdf, TreIdf}
         }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findaluall(req,res){
        const {EmpIdf, AluIdf} = req.body;
        const retorno = await Ocorrencia.findall({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf, TreIdf, AluIdf} = req.body;
        var retorno = await Ocorrencia.findAll({
            where : {EmpIdf, TreIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            TreIdf,
            OcoIdf,
            OcoTipo,
            AluIdf,
            OcoDescricao,
            UsuIdf } = req.body;
        const DataAlt = new Date();
        await Ocorrencia.update(
        {
            EmpIdf,
            TreIdf,
            OcoIdf,
            AluIdf,
            OcoTipo,
            OcoDescricao,
            UsuIdf,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                TreIdf:TreIdf,
                OcoIdf:OcoIdf
            }
        }).then(()=>{
            return res.json({TreIdft});
        }).catch(function(err){
            return errDB(res,err);
        });        
    },

    async delete(req,res){
        const {EmpIdf, TreIdf, OcoIdf} = req.body;
        const retorno = await Ocorrencia.destroy({
            where : {EmpIdf,
                TreIdf,
                OcoIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }

}