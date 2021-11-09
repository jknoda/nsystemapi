const errDB = require('../common/_sendErrorsDB');
const Anamnese = require('../models/Anamnese')

module.exports = {
    async create(req,res){
        const {EmpIdf,
            AluIdf,
            AnaData,
            AnaConvenio,
            AnaRespEmergencia,
            AnaRespEmeFone,
            AnaRespEmeObs,
            AnaTipoSangue,
            AnaHipertenso,
            AnaDiabetes,
            AnaCardiaco,
            AnaLabirintite,
            AnaAsma,
            AnaConvulcoes,
            AnaAlergia,
            AnaDepressao,
            AnaOutras,
            AnaMedicamentos,
            AnaCirurgia,
            AnaOsseo,
            AnaFratura,
            AnaStatus } = req.body;
        const DataInc = new Date();
        const DataAlt = new Date();
        var AnaIdf = 0;
        await Anamnese.findOne({
            attributes: ['AnaIdf'],
            where: {EmpIdf:EmpIdf, AluIdf:AluIdf},
            order: [[ 'AnaIdf', 'DESC' ]]
        }).then((data)=>{
            AnaIdf = data.AnaIdf;
        }).catch(()=>{
            AnaIdf = 0;
        }).finally(()=>{
            AnaIdf++;
            Anamnese.create({EmpIdf,
                AluIdf,
                AnaIdf,
                AnaData,
                AnaConvenio,
                AnaRespEmergencia,
                AnaRespEmeFone,
                AnaRespEmeObs,
                AnaTipoSangue,
                AnaHipertenso,
                AnaDiabetes,
                AnaCardiaco,
                AnaLabirintite,
                AnaAsma,
                AnaConvulcoes,
                AnaAlergia,
                AnaDepressao,
                AnaOutras,
                AnaMedicamentos,
                AnaCirurgia,
                AnaOsseo,
                AnaFratura,
                AnaStatus,
                DataInc,
                DataAlt})
            .then(()=>{
                return res.json(AnaIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,AluIdf,AnaIdf} = req.body;
        const retorno = await Anamnese.findOne({
            where : {EmpIdf, AluIdf, AnaIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async has(req,res){
        const {EmpIdf,AluIdf,AnaIdf} = req.body;
        const retorno = await Anamnese.findOne({
            where : {EmpIdf, AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno != null);
    },

    async findlast(req,res){
        const {EmpIdf,AluIdf} = req.body;
        const retorno = await Anamnese.findOne({
            where : {EmpIdf, AluIdf},
            order: [
                ['AnaIdf','DESC']
            ]
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },


    async findall(req,res){
        const {EmpIdf,AluIdf} = req.body;
        const retorno = await Anamnese.findAll({
            where : {EmpIdf,AluIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            AluIdf,
            AnaIdf,
            AnaData,
            AnaConvenio,
            AnaRespEmergencia,
            AnaRespEmeFone,
            AnaRespEmeObs,
            AnaTipoSangue,
            AnaHipertenso,
            AnaDiabetes,
            AnaCardiaco,
            AnaLabirintite,
            AnaAsma,
            AnaConvulcoes,
            AnaAlergia,
            AnaDepressao,
            AnaOutras,
            AnaMedicamentos,
            AnaCirurgia,
            AnaOsseo,
            AnaFratura,
            AnaStatus  } = req.body;
        const DataAlt = new Date();
        await Anamnese.update(
        {
            AnaData,
            AnaConvenio,
            AnaRespEmergencia,
            AnaRespEmeFone,
            AnaRespEmeObs,
            AnaTipoSangue,
            AnaHipertenso,
            AnaDiabetes,
            AnaCardiaco,
            AnaLabirintite,
            AnaAsma,
            AnaConvulcoes,
            AnaAlergia,
            AnaDepressao,
            AnaOutras,
            AnaMedicamentos,
            AnaCirurgia,
            AnaOsseo,
            AnaFratura,
            AnaStatus,
            DataAlt
        },
        {
            where: {
                EmpIdf: EmpIdf,
                AluIdf: AluIdf,
                AnaIdf: AnaIdf
            }            
        }).then((data)=>{
                return res.json(AnaIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, AluIdf, AnaIdf} = req.body;
        const retorno = await Anamnese.destroy({
            where : {EmpIdf, AluIdf, AnaIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }

}