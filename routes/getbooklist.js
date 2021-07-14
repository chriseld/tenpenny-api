var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.all('/', function(req, res, next) {
    con.query("SELECT books.*, users.username FROM users, books INNER JOIN chapters ON books.idbooks = chapters.idbooks WHERE chapters.chapternumber = 1 AND books.idauthor = users.idusers AND users.active = 1 ORDER BY books.title", function (err, result, fields) {
        if (err) console.log(err);
        res.send(result);
    })
});

module.exports = router;