const errDB = require('../common/_sendErrorsDB');
const News = require('../models/News');

module.exports = {
    async create(req,res){
        const {EmpIdf,
            NewsArq,
            NewsExt,
            NewsImg,
            NewsTitulo,
            NewsTexto,
            NewsData,
            UsuIdf } = req.body;
        var NewsIdf = 0;
        await News.findOne({
            attributes: ['NewsIdf'],
            where: {EmpIdf:EmpIdf},
            order: [[ 'NewsIdf', 'DESC' ]]
        }).then((data)=>{
            NewsIdf = data.NewsIdf;
        }).catch(()=>{
            NewsIdf = 0;
        }).finally(()=>{
            NewsIdf++;
            News.create({EmpIdf,
                NewsIdf,
                NewsArq,
                NewsExt,
                NewsImg,
                NewsTitulo,
                NewsTexto,
                NewsData,
                UsuIdf})
            .then(()=>{
                return res.json(NewsIdf);
            }).catch(function(err){
                return errDB(res,err);
            });
        });
    },

    async find(req,res){
        const {EmpIdf,NewsIdf} = req.body;
        const retorno = await News.findOne({
            where : {EmpIdf, NewsIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async findall(req,res){
        const {EmpIdf} = req.body;
        const retorno = await News.findAll({
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async getfindall(req,res){
        var EmpIdf = req.query.empidf;
        const retorno = await News.findAll({
            where : {EmpIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    },

    async update(req,res){
        const {EmpIdf,
            NewsIdf,
            NewsArq,
            NewsExt,
            NewsImg,
            NewsTitulo,
            NewsTexto,
            NewsData,
            UsuIdf } = req.body;
        await News.update(
        { NewsArq,
          NewsExt,
          NewsImg,
          NewsTitulo,
          NewsTexto,
          NewsData,
          UsuIdf
        },
        {
            where: {
                EmpIdf: EmpIdf,
                NewsIdf: NewsIdf
            }            
        }).then((data)=>{
                return res.json(NewsIdf);
        }).catch(function(err){
            return errDB(res,err);
        });
    },

    async delete(req,res){
        const {EmpIdf, NewsIdf} = req.body;
        const retorno = await News.destroy({
            where : {EmpIdf, NewsIdf}
        }).catch(function(err){
            return errDB(res,err);
        });
        return res.json(retorno);
    }
}