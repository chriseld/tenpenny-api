var express = require('express');
var router = express.Router();
var con = require('./DbConnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function(req, res, next) {
    const password = req.query.password;
    const userid = req.query.id;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        con.query("UPDATE users SET password = '" + hash + "' WHERE idusers = " + userid, function (err, result, fields) {
        if (err) throw err;
        res.send("Success")
    })
    });

    
});

module.exports = router;