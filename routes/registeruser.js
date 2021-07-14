var express = require('express');
var router = express.Router();
var con = require('./DbConnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function(req, res, next) {
    const email = req.query.email;
    const username = req.query.username;
    const password = req.query.password;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        con.query("INSERT INTO users (username, email, password) VALUES ('" + username + "', '" + email + "', '" + hash + "' )", function (err, result, fields) {
        if (err) throw err;
        res.send("Success")
    })
    });

    
});

module.exports = router;