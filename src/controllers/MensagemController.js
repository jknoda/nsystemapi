const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const Mensagem = require('../models/Mensagem')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            MsgTexto,
            MsgEmail,
            MsgNome,
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
                MsgNome,
                UsuIdf,
                DataInc,
                DataAlt})
            .then(()=>{
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'mensagem',
                    dado:JSON.stringify(req.body)
                });
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
            MsgNome,
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
                MsgNome,
                UsuIdf,
                DataInc,
                DataAlt})
            .then(()=>{
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'mensagem resp',
                    dado:JSON.stringify(req.body)
                });
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
        var retorno = await Mensagem.findAll({
            where : {EmpIdf},
            order : [
                ['MsgIdf','DESC'],
                ['DataInc','DESC']
            ]
        }).catch(function(err){
            return errDB(res,err);
        });
        let quebra = -1;
        let comentarios = [];
        var retornoAux = [];
        var elementAux = new Mensagem();
        retorno.forEach(element => {
            if (quebra != element.MsgIdf)
            {
                if (quebra != -1){
                    retornoAux.push({
                        ...elementAux.dataValues,
                        comentarios
                    });
                }
                comentarios = [];
                quebra = element.MsgIdf;
            }
            if (element.MsgIdfIt == 0){
                elementAux = element;
            }else{
                comentarios.push(element);
            }
        });
        if (quebra != -1){
            if (quebra != -1){
                retornoAux.push({
                    ...elementAux.dataValues,
                    comentarios
                });
            }
        }
        return res.json(retornoAux);
    },

    async update(req,res){
        const {EmpIdf,
            MsgIdf,
            MsgIdfIt,
            MsgTexto,
            MsgEmail,
            MsgNome,
            UsuIdf } = req.body;
        const DataAlt = new Date();
        await Mensagem.update(
        {
            EmpIdf,
            MsgIdf,
            MsgIdfIt,
            MsgTexto,
            MsgEmail,
            MsgNome,
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
            logDB({
                idf:0,
                usuidf:req.query.useridf,
                operacao:'update',
                tabela:'mensagem',
                dado:JSON.stringify(req.body)
            });
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
        logDB({
            idf:0,
            usuidf:req.query.useridf,
            operacao:'delete',
            tabela:'mensagem',
            dado:JSON.stringify(req.body)
        });
        return res.json(retorno);
    }

}