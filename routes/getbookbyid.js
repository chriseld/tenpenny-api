var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.get('/', function(req, res, next) {
    const bookid = req.query.id;

    con.query("SELECT books.*, users.username FROM books INNER JOIN users ON books.idauthor=users.idusers WHERE books.idbooks =" + bookid, function (err, result, fields) {
        if (err) console.log(err);
        res.send(result);
    })

    
});

module.exports = router;