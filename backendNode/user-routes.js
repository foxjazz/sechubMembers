var express = require('express'),
    _ = require('lodash'),
    config = require('./config'),
    jwt = require('jsonwebtoken');

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = {
    id: 1,
    login: 'gonto',
    password: 'gonto',
    email: 'email'
};

var Db = require('tingodb')().Db,
    assert = require('assert');

var db = new Db('/c2016/', {});
var collection = db.collection("users");

console.log('restarted');

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60 * 5 });
}

app.post('/sessions/signin', function(req, res) {
    console.log("create with: " + req.body.login);
    if (!req.body.login || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }

    collection.findOne({ login: req.body.login }, function(err, item) {
        if (item && item.password === req.body.password)
            console.log('returning good pass');
        return res.status(201).send(item);
    })

    var profile = _.pick(req.body, 'login', 'password', 'email');
    console.log(collection.count());
    if (collection.count() !== undefined) {
        users.id = collection.findOne().sort({ id: -1 });
    }
    users.login = profile.login;
    users.password = profile.password;
    users.email = profile.email;
    collection.insert([users], { id: users.id }, function(err, item) {
        if (null !== err) {
            console.log('err:' + err);
        } else {
            console.log(JSON.stringify('item:' + item));
        }
        console.log('inserted ' + JSON.stringify(users));
        var token = createToken(users);
        console.log('token:' + token);
        return res.status(201).send({
            id_token: token

        });
    });

});

app.post('/sessions/login', function(req, res) {
    console.log("login with: " + req.body);
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    collection.findOne({ login: req.body.username }, function(err, item) {
        if (item && item.password === req.body.password)
            return res.status(201).send({
                id_token: createToken(user)
            });
    })

    return res.status(401).send("The username or password don't match");

});