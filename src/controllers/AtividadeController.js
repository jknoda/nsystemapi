const errDB = require('../common/_sendErrorsDB');
const Atividade = require('../models/Atividade')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            AtvTitulo,
            AtvObjetivo,
            AtvDescricao,
            AtvMaterial,
            AtvObs } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var AtvIdf = 0;
        await Atividade.findOne({
            attributes: ['AtvIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'AtvIdf', 'DESC' ]]
        }).then((data)=>{
            AtvIdf = data.AtvIdf;
        }).catch(()=>{
            AtvIdf = 0;
        }).finally(()=>{
            AtvIdf++;
            Atividade.create({EmpIdf,
                AtvIdf,
                AtvTitulo,
                AtvObjetivo,
                AtvDescricao,
                AtvMaterial,
                AtvObs,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(AtvIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,AtvIdf} = req.body;
        const retorno = await Atividade.findOne({
            where : {EmpIdf, AtvIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await Atividade.findAll({
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            AtvIdf,
            AtvTitulo,
            AtvObjetivo,
            AtvDescricao,
            AtvMaterial,
            AtvObs } = req.body;
        const DataAlt = new Date();
        await Atividade.update(
        {
            EmpIdf,
            AtvIdf,
            AtvTitulo,
            AtvObjetivo,
            AtvDescricao,
            AtvMaterial,
            AtvObs,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                AtvIdf: AtvIdf
            }            
        }).then((data)=>{
                return res.json(AtvIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, AtvIdf} = req.body;
        const retorno = await Atividade.destroy({
            where : {EmpIdf, AtvIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }

}