var express = require('express');
var router = express.Router();
var con = require('./DbConnection');

router.all('/', function(req, res, next) {
    const bookid = req.query.bookid;
    const chapternum = req.query.chapternum;
    const chaptertitle = req.body.chaptertitle;
    const chaptertext = req.body.chaptertext;
    console.log(req.body);

    con.query("INSERT INTO chapters (idbooks, chapternumber, chaptertitle, chaptertext) VALUES (" + bookid + ", " + chapternum + ", '" + chaptertitle + "', '" + chaptertext + "' )", function (err, result, fields) {
        if (err) console.log(err);
        res.send(result);
    })

    
});

module.exports = router;