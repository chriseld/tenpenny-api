var express = require('express');
var router = express.Router();
var con = require('./DbConnection');
const bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
    const password = req.query.password;
    const hash = req.query.hash;
    
    bcrypt.compare(password, hash, function(err, result) {
        res.send(result);
    });
});

module.exports = router;