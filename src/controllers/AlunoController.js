const errDB = require('../common/_sendErrorsDB');
const Aluno = require('../models/Aluno')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            AluNome,
            AluCPF,
            AluDataNasc,
            AluNomeResp,
            AluFoneResp,
            AluFone,
            AluLogradouro,
            AluLogNum,
            AluBairro,
            AluCidade,
            AluUF,
            AluEmail,
            AluPeso,
            AluAltura,
            AluStatus,
            UsuIdf } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var AluIdf = 0;
        await Aluno.findOne({
            attributes: ['AluIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'AluIdf', 'DESC' ]]
        }).then((data)=>{
            AluIdf = data.AluIdf;
        }).catch(()=>{
            AluIdf = 0;
        }).finally(()=>{
            AluIdf++;
            Aluno.create({EmpIdf,
                AluIdf,
                AluNome,
                AluCPF,
                AluDataNasc,
                AluNomeResp,
                AluFoneResp,
                AluFone,
                AluLogradouro,
                AluLogNum,
                AluBairro,
                AluCidade,
                AluUF,
                AluEmail,
                AluPeso,
                AluAltura,
                AluStatus,
                UsuIdf,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(AluIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,AluIdf} = req.body;
        const retorno = await Aluno.findOne({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await Aluno.findAll({
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            AluIdf,
            AluNome,
            AluCPF,
            AluDataNasc,
            AluNomeResp,
            AluFoneResp,
            AluFone,
            AluLogradouro,
            AluLogNum,
            AluBairro,
            AluCidade,
            AluUF,
            AluEmail,
            AluPeso,
            AluAltura,
            AluStatus,
            UsuIdf  } = req.body;
        const DataAlt = new Date();
        await Aluno.update(
        {
            AluNome,
            AluCPF,
            AluDataNasc,
            AluNomeResp,
            AluFoneResp,
            AluFone,
            AluLogradouro,
            AluLogNum,
            AluBairro,
            AluCidade,
            AluUF,
            AluEmail,
            AluPeso,
            AluAltura,
            AluStatus,
            UsuIdf,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                AluIdf: AluIdf
            }            
        }).then((data)=>{
                return res.json(AluIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, AluIdf} = req.body;
        const retorno = await Aluno.destroy({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }

}