var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.get('/', function(req, res, next) {
    const email = req.query.email;
    const userid = req.query.id;
    con.query("UPDATE users SET email = '" + email + "' WHERE idusers = " + userid, function (err, result, fields) {
        if (err) throw err;
    })
});

module.exports = router;