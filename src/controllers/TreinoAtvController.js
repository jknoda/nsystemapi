const errDB = require('../common/_sendErrorsDB');
const TreinoAtv = require('../models/TreinoAtv')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            TreIdf,
            TreAtvOrdem,
            AtvIdf,
            TreAtvDesc,
            TreAtvRep,
            TreAtvMin,
            TreAtvObs} = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var TreAtvItem = 0;
        await TreinoAtv.findOne({
            attributes: ['TreAtvItem'],
            where: {EmpIdf,TreIdf},
            order: [[ 'TreAtvItem', 'DESC' ]]
        }).then((data)=>{
            TreAtvItem = data.TreAtvItem;
        }).catch(()=>{
            TreAtvItem = 0;
        }).finally(()=>{
            TreAtvItem++;
            TreinoAtv.create({EmpIdf,
                TreIdf,
                TreAtvItem,
                TreAtvOrdem,
                AtvIdf,
                TreAtvDesc,
                TreAtvRep,
                TreAtvMin,
                TreAtvObs,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(TreAtvItem);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,TreIdf,TreAtvItem} = req.body;
        const retorno = await TreinoAtv.findOne({
            where : {EmpIdf, TreIdf, TreAtvItem}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf, TreIdf} = req.body;
        const retorno = await TreinoAtv.findAll({
            where : {EmpIdf,TreIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findallordem(req,res){
        const {EmpIdf, TreIdf} = req.body;
        const retorno = await TreinoAtv.findAll({
            where : {EmpIdf,TreIdf},
            order: ['TreAtvOrdem']
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            TreIdf,
            TreAtvItem,
            TreAtvOrdem,
            AtvIdf,
            TreAtvDesc,
            TreAtvRep,
            TreAtvMin,
            TreAtvObs } = req.body;
        const DataAlt = new Date();
        await TreinoAtv.update(
        {
            EmpIdf,
            TreIdf,
            TreAtvItem,
            TreAtvOrdem,
            AtvIdf,
            TreAtvDesc,
            TreAtvRep,
            TreAtvMin,
            TreAtvObs,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                TreIdf: TreIdf,
                TreAtvItem: TreAtvItem
            }            
        }).then((data)=>{
                return res.json(TreAtvItem);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, TreIdf, TreAtvItem} = req.body;
        const retorno = await TreinoAtv.destroy({
            where : {EmpIdf, TreIdf, TreAtvItem}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }
}