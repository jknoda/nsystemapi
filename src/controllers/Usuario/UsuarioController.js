const errDB = require('../../common/_sendErrorsDB');
const Usuario = require('../../models/Usuario/Usuario')

module.exports = {
    async finduser(req,res){
        const {empidf,usuemail} = req.body;
        const retorno = await Usuario.findOne({
            where : {empidf,usuemail}
        })
        .catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },
}