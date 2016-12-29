var express = require('express'),
    quoter = require('./quoter');

var app = module.exports = express.Router();

var cradle = require('cradle');

var db = new(cradle.Connection)().database('members');

app.get('/api/random-quote', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});


app.post('/couchproxy', function(req, res) {

    // console.log("todo:", req.body);

    // res.status(200).json(todo);
    // res.send('OK');
    // if (!req.body.login || !req.body.password) {
    //     return res.status(400).send("You must send the username and the password");
    // }
    // try {
    //     isuser = jdb.getData("/" + req.body.login);
    //     if (isuser.password === req.body.password) {
    //         console.log('good pw on signin returning 201');
    //         return res.status(201).send(iuser);
    //     }

    // } catch (error) {
    //     console.log(error);
    // }

    // return res.status(401).send("The username or password don't match");


    db.save(req.body._id, req.body.couchbody, function(err, res) {
        if (err)
            console.log(err.json());
        else {
            res.status(200);
            res.send('OK');
        }
    });


});