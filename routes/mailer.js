const con = require('./mailConnection');

var express = require('express');
var router = express.Router();

const nodemailer = require("nodemailer");

router.get('/', function(req, res, next) {
    const email = req.query.email;
    const subject = req.query.subject;
    const html = req.query.html;

    async function main() {
        let transporter = nodemailer.createTransport({
            host: "mail.chriseld.com",
            port: 465,
            secure: true,
            auth: {
              user: con.username,
              pass: con.password
            },
        });
    
        let info = await transporter.sendMail({
            from: '"noreply" <noreply@chriseld.com>', // sender address
            to: email, // list of receivers
            subject: subject,
            html: html
        });
    
        console.log(info);
    }
    main();
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

module.exports = router;