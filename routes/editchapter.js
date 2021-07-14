var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.all('/', function(req, res, next) {
    const idchapters = req.query.idchapters;
    const chaptertitle = req.body.chaptertitle;
    const chaptertext = req.body.chaptertext;
    console.log(req.body);

    con.query("UPDATE chapters SET chaptertitle = '" + chaptertitle + "', chaptertext = '" + chaptertext + "', lastupdated = NOW() WHERE idchapters = " + idchapters, function (err, result, fields) {
        if (err) console.log(err);
        res.send(result);
    })

    
});

module.exports = router;