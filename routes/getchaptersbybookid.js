var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.get('/', function(req, res, next) {
    const bookid = req.query.id;

    con.query("SELECT * FROM chapters WHERE idbooks =" + bookid + " ORDER BY chapternumber", function (err, result, fields) {
        if (err) console.log(err);
        res.send(result);
    })

    
});

module.exports = router;