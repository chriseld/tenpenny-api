var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.get('/', function(req, res, next) {
    const email = req.query.email.toLowerCase();
    con.query("SELECT COUNT(idusers) AS idusers FROM users WHERE LOWER(email)='" + email + "'", function (err, result, fields) {
        if (err) throw err;
        if(result[0].idusers > 0) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
});

module.exports = router;