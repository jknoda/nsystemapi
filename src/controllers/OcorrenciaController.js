const errDB = require('../common/_sendErrorsDB');
const Ocorrencia = require('../models/Ocorrencia')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            TreIdf,
            TreAtvItem,
            OcoTipo,
            OcoDescricao,
            UsuIdf } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var OcoIdf = 0;
        await Ocorrencia.findOne({
            attributes: ['OcoIdf'],
            where: {
                EmpIdf:EmpIdf,
                TreIdf:TreIdf,
                TreAtvItem:TreAtvItem
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
                TreAtvItem,
                OcoIdf,
                OcoTipo,
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
        const {EmpIdf, TreIdf, TreAtvItem, OcoIdf} = req.body;
        const retorno = await Ocorrencia.findOne({
            where : {EmpIdf, TreIdf, TreAtvItem, OcoIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf, TreIdf, TreAtvItem} = req.body;
        var retorno = await Ocorrencia.findAll({
            where : {EmpIdf, TreIdf, TreAtvItem}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            TreIdf,
            TreAtvItem,
            OcoIdf,
            OcoTipo,
            OcoDescricao,
            UsuIdf } = req.body;
        const DataAlt = new Date();
        await Ocorrencia.update(
        {
            EmpIdf,
            TreIdf,
            TreAtvItem,
            OcoIdf,
            OcoTipo,
            OcoDescricao,
            UsuIdf,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                TreIdf:TreIdf,
                TreAtvItem:TreAtvItem,
                OcoIdf:OcoIdf
            }            
        }).then(()=>{
                return res.json({TreIdf,TreAtvItem,OcoIdf});
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf,
            TreIdf,
            TreAtvItem,
            OcoIdf} = req.body;
        const retorno = await Ocorrencia.destroy({
            where : {EmpIdf,
                TreIdf,
                TreAtvItem,
                OcoIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }

}