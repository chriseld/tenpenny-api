var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.get('/', function(req, res, next) {
    const idusers = req.query.idusers;
    con.query("UPDATE users SET last_login = NOW() WHERE idusers =" + idusers, function (err, result, fields) {
        res.send("OK");
    })
});

module.exports = router;