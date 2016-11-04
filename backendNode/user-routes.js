var express = require('express'),
    _ = require('lodash'),
    config = require('./config'),
    jwt = require('jsonwebtoken');

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = {
    login: 'gonto',
    password: 'gonto',
    email: 'email'
};

var JDb = require('node-json-db');

var jdb = new JDb("users", true, false);

console.log('restarted');

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60 * 5 });
}

app.post('/sessions/signin', function(req, res) {
    console.log("create with: " + req.body.login);
    if (!req.body.login || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    try {
        isuser = jdb.getData("/" + req.body.login);
        if (isuser.password === req.body.password) {
            console.log('good pw on signin returning 201');
            return res.status(201).send(iuser);
        }

    } catch (error) {
        console.log(error);
    }



    var profile = _.pick(req.body, 'login', 'password', 'email');

    users.login = profile.login;
    users.password = profile.password;
    users.email = profile.email;
    jdb.push("/" + users.login, users);
    return res.status(201).send({
        id_token: token
    });

});

app.post('/sessions/login', function(req, res) {
   console.log("create with: " + req.body.login);
    if (!req.body.login || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    try {
        isuser = jdb.getData("/" + req.body.login);
        if (isuser.password === req.body.password) {
            console.log('good pw on signin returning 201');
            return res.status(201).send(iuser);
        }

    } catch (error) {
        console.log(error);
    }

    return res.status(401).send("The username or password don't match");

});