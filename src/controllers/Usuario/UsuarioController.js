const errDB = require('../../common/_sendErrorsDB');
const Usuario = require('../../models/Usuario/Usuario')

module.exports = {
    async create(req,res){
        const {empidf, usuemail, usunome, 
            usucpf, usulogradouro, usulognum,
            usubairro, usucidade, usuuf, 
            usucelular, usufone} = req.body;
        const datainc = new Date();
        const dataalt = new Date();
        var usuidf = 0;
        await Usuario.findOne({
            attributes: ['usuidf'],
            where: {empidf:empidf},
            order: [[ 'usuidf', 'DESC' ]]
        }).then((data)=>{
            usuidf = data.usuidf;
            usuidf++;
            Usuario.create({empidf, usuidf, usuemail, usunome, 
                usucpf, usulogradouro, usulognum,
                usubairro, usucidade, usuuf, 
                usucelular, usufone, datainc, dataalt})
            .then(()=>{
                return res.json(usuidf);
            }).catch(function(err){
                return errDB(res,err);
            });
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async finduser(req,res){
        const {empidf,usuemail} = req.body;
        const retorno = await Usuario.findOne({
            where : {empidf,usuemail}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async find(req,res){
        const {empidf,usuidf} = req.body;
        const retorno = await Usuario.findOne({
            where : {empidf, usuidf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {empidf, usuidf, usunome, 
            usucpf, usulogradouro, usulognum,
            usubairro, usucidade, usuuf, 
            usucelular, usufone} = req.body;
        const dataalt = new Date();
        await Usuario.update(
        {
            usunome, 
            usucpf, usulogradouro, usulognum,
            usubairro, usucidade, usuuf, 
            usucelular, usufone, dataalt
        },
        {
            where: {
                empidf: empidf,
                usuidf: usuidf
            }            
        }).then((data)=>{
                return res.json(usuidf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

}