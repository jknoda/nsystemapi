const errDB = require('../common/_sendErrorsDB');
const Logdata = require('../models/Logdata')

module.exports = {
    async create(req,res){
        var data = req.data;
        var usuidf = req.usuidf;
        var operacao = req.operacao;
        var dado = req.dado;
        var tabela = req.tabela;
        var idf = 0;
        await Logdata.findOne({
            attributes: ['idf'],
            order: [[ 'idf', 'DESC' ]]
        }).then((data)=>{
            idf = data.idf;
        }).catch(()=>{
            idf = 0;
        }).finally(()=>{
            idf++;
            Logdata.create({idf,
                data,
                usuidf,
                operacao,
                dado,
                tabela})
            .then(()=>{
                return;
            }).catch(function(err){
                console.log('ERRO',err);
                return err;
            });
        });
    }
}