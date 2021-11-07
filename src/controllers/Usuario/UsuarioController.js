const errDB = require('../../common/_sendErrorsDB');
const Usuario = require('../../models/Usuario')

module.exports = {
    async create(req,res){
        const {EmpIdf, UsuEmail, UsuNome, 
            UsuCPF, UsuPerfil } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var UsuIdf = 0;
        await Usuario.findOne({
            attributes: ['UsuIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'UsuIdf', 'DESC' ]]
        }).then((data)=>{
            UsuIdf = data.UsuIdf;
        }).catch(()=>{
            UsuIdf = 0;
        }).finally(()=>{
            UsuIdf++;
            Usuario.create({EmpIdf, UsuIdf, UsuEmail, UsuNome, 
                UsuCPF, UsuPerfil, DataInc, DataAlt})
            .then(()=>{
                return res.json(UsuIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async finduser(req,res){
        const {EmpIdf,UsuEmail} = req.body;
        const retorno = await Usuario.findOne({
            where : {EmpIdf,UsuEmail}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async find(req,res){
        const {EmpIdf,UsuIdf} = req.body;
        const retorno = await Usuario.findOne({
            where : {EmpIdf, UsuIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf, UsuIdf, UsuNome, 
            UsuCPF, UsuPerfil } = req.body;
        const DataAlt = new Date();
        await Usuario.update(
        {
            UsuNome, 
            UsuCPF , UsuPerfil, DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                UsuIdf: UsuIdf
            }            
        }).then((data)=>{
                return res.json(UsuIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

}