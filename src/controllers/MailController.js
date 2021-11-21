const errDB = require('../common/_sendErrorsDB');
const nodemailer = require('nodemailer');

module.exports = {
    enviar(req,res){
        const {service, user, pass, from, to, subject, text, html} = req.body;
        const  transporter = nodemailer.createTransport({
            service: service,
            auth: {
                user: user,
                pass: pass,
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const email = {
            from: from,
            to: to,
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