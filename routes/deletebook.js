var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.all('/', function(req, res, next) {
    const idbooks = req.query.idbooks;
    const authid = req.body.authid;

    if(authid) {

    con.query("DELETE from books WHERE idbooks = " + idbooks, function (err, result, fields) {
        if (err) console.log(err);
    })

    con.query("DELETE from chapters WHERE idbooks = " + idbooks, function (err, result, fields) {
        if (err) console.log(err);
    })

    res.send("ok");
    }
});

module.exports = router;