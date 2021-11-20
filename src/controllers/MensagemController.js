const errDB = require('../common/_sendErrorsDB');
const Mensagem = require('../models/Mensagem')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            MsgTexto,
            MsgEmail,
            UsuIdf } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var MsgIdf = 0;
        var MsgIdfIt = 0;
        await Mensagem.findOne({
            attributes: ['MsgIdf'],
            where: {
                EmpIdf:EmpIdf
            },
            order: [
                [ 'MsgIdf', 'DESC' ],
            ]
        }).then((data)=>{
            MsgIdf = data.MsgIdf;
        }).catch(()=>{
            MsgIdf = 0;
        }).finally(()=>{
            MsgIdf++;
            Mensagem.create({EmpIdf,
                MsgIdf,
                MsgIdfIt,
                MsgTexto,
                MsgEmail,
                UsuIdf,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(MsgIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async createresp(req,res){
        const {EmpIdf,
            MsgIdf,
            MsgTexto,
            MsgEmail,
            UsuIdf } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var MsgIdfIt = 0;
        await Mensagem.findOne({
            attributes: ['MsgIdf','MsgIdfIt'],
            where: {
                EmpIdf:EmpIdf,
                MsgIdf:MsgIdf
            },
            order: [
                [ 'MsgIdfIt', 'DESC' ],
            ]
        }).then((data)=>{
            MsgIdfIt = data.MsgIdfIt;
        }).catch(()=>{
            MsgIdfIt = 0;
        }).finally(()=>{
            MsgIdfIt++;
            Mensagem.create({EmpIdf,
                MsgIdf,
                MsgIdfIt,
                MsgTexto,
                MsgEmail,
                UsuIdf,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json({MsgIdf,MsgIdfIt});
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,MsgIdf,MsgIdfIt} = req.body;
        const retorno = await Mensagem.findOne({
            where : {EmpIdf, MsgIdf, MsgIdfIt}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await Mensagem.findAll({
            where : {EmpIdf},
            order : [
                ['DataInc','DESC']
            ]
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            MsgIdf,
            MsgIdfIt,
            MsgTexto,
            MsgEmail,
            UsuIdf } = req.body;
        const DataAlt = new Date();
        await Mensagem.update(
        {
            EmpIdf,
            MsgIdf,
            MsgIdfIt,
            MsgTexto,
            MsgEmail,
            UsuIdf,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                MsgIdf: MsgIdf,
                MsgIdfIt: MsgIdfIt
            }            
        }).then((data)=>{
                return res.json({MsgIdf,MsgIdfIt});
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, MsgIdf, MsgIdfIt} = req.body;
        const retorno = await Mensagem.destroy({
            where : {EmpIdf, MsgIdf, MsgIdfIt}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }

}