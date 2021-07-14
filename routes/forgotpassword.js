var axios = require('axios');
var express = require('express');
var router = express.Router();
var con = require('./DbConnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function newPass() {
    let password = "";

    const word = ["dog", "cat", "fish", "lizard", "plant"];
    const randomIndex = Math.floor(Math.random() * word.length);
    const randomWord = word[randomIndex];
    const number = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

    password = randomWord + number.toString();

    return password;
}

async function emailPass(email, temp) {
    axios.get('http://localhost:9000/mailer?email=' + email + '&subject=Your temporary password&html=Your temporary password is ' + temp);
}

router.get('/', function(req, res, next) {
    const email = req.query.email.toLowerCase();
    con.query("SELECT COUNT(idusers) AS idusers FROM users WHERE LOWER(email)='" + email + "'", function (err, result, fields) {
        if (err) throw err;
        if(result[0].idusers > 0) {
            temp = newPass();
            bcrypt.hash(temp, saltRounds, function(err, hash) {
                con.query("UPDATE users SET password = '" + hash + "' WHERE LOWER(email)='" + email + "'", function (err, result, fields) {
                if (err) throw err;
                emailPass(email, temp);
                res.send("Email with temporary password sent. Please change your password the next time you log in.");
            })
            });
        } else {
            res.send("Email address not registered.");
        }
    })
});

module.exports = router;