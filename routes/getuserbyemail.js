var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKEY = fs.readFileSync('./routes/private.key', 'utf8'); // to sign JWT
const publicKEY = fs.readFileSync('.//routes/public.key', 'utf8'); 	// to verify JWT

router.get('/', function(req, res, next) {
    const email = req.query.email.toLowerCase();
    con.query("SELECT * FROM users WHERE active = 1 AND LOWER(email)='" + email + "'", function (err, result, fields) {
        if (err) throw err;
        try {if(result[0].idusers > 0) {

            var payload = {
                username: result[0].username,
                userid: result[0].idusers,
                useremail: result[0].email,
                userrole: result[0].role,
                userpwd: result[0].password
              };
  
              var i = 'tenpenny';
              var s = result[0].email;
              var a = 'http://localhost';
  
              var signOptions = {
                issuer: i,
                subject: s,
                audience: a,
                expiresIn: "7d",
                algorithm: "RS256"
              }
  
              var token = jwt.sign(payload, privateKEY, signOptions);

            res.send(token);
        } else {
            res.send("User not found");
        }} catch {
            res.send("User not found")
        }
    })
});

module.exports = router;