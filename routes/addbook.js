var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.post('/', function(req, res, next) {
    const authid = req.body.authid;
    const title = req.body.title;
    const blurb = req.body.blurb;
    const cover = req.body.cover;
    
    con.query("INSERT INTO books (idauthor, title, blurb, cover) VALUES (" + authid + ", '" + title + "', '" + blurb + "', '" + cover + "' )", function (err, result, fields) {
        if (err) console.log(err);
        res.send(result);
    })
});

module.exports = router;