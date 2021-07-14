var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.all('/', function(req, res, next) {
    const idbooks = req.query.idbooks;
    const booktitle = req.body.booktitle;

    con.query("UPDATE books SET title = '" + booktitle + "' WHERE idbooks = " + idbooks, function (err, result, fields) {
        if (err) console.log(err);
        res.send(result);
    })

    
});

module.exports = router;