const errDB = require('../common/_sendErrorsDB');
const logDB = require('../common/_logDB');
const nodemailer = require('nodemailer');
const Configuracao = require('../models/Configuracao');


module.exports = {
    async enviar(req,res){
        const {service, user, pass, from, to, cc, subject, text, html} = req.body;
        let serviceAux = service;
        let userAux = user;
        let passAux = pass;
        let fromAux = from;
        let toAux = to;
        if (!service)
        {
            let EmpIdf = 1;
            let CfgIdfArray = [10,11,12,13,14];
            let retorno = await Configuracao.findAll({
                where : {
                    EmpIdf,
                    CfgIdf: CfgIdfArray
                }
                }).catch(function(err){
                    return errDB(res,err);
            });            
            serviceAux = retorno[0].CfgVlrStr;
            userAux = retorno[1].CfgVlrStr;
            passAux = retorno[2].CfgVlrStr;
            fromAux = retorno[3].CfgVlrStr;
            toAux = retorno[4].CfgVlrStr;
        }
        const  transporter = nodemailer.createTransport({
            service: serviceAux,
            auth: {
                user: userAux,
                pass: passAux,
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const email = {
            from: fromAux,
            to: toAux,
            cc: cc,
            subject: subject,
            text: text,
            html: html
        }
        transporter.sendMail(email, (err, result)=>{
            if(err)
                return errDB(res,err);
            console.log('Email enviado:',email.to);
            return res.json('OK');
        });
    }

}