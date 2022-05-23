const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const Acesso = require('../models/Acesso')


module.exports = {
    async create(req,res){
        const {Usuario,
            Email,
            Origem,
            UsuIdf } = req.body;
        const Data = new Date();
        var Idf = 0;
        await Acesso.findOne({
            attributes: ['Idf'],
            order: [[ 'Idf', 'DESC' ]]
        }).then((data)=>{
            Idf = data.Idf;
        }).catch(()=>{
            Idf = 0;
        }).finally(()=>{
            Idf++;
            Acesso.create({Idf,
                Data,
                Usuario,
                Email,
                Origem,
                UsuIdf})
            .then(()=>{
                logDB({
                    idf:0,
                    usuidf:req.query.useridf,
                    operacao:'add',
                    tabela:'acesso',
                    dado:JSON.stringify(req.body)
                });
                return res.json(Idf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    }
}