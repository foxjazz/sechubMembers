var express = require('express'),
    quoter = require('./quoter');

var app = module.exports = express.Router();


app.get('/api/random-quote', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});

app.post('/damnfun', function(req, res) {

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


    db.save(req.body.id, req.body.couchdata, function(err, res) {
        if (err)
            console.log(err.json());
        else
            console.log(res.json());
    });
    res.end();

});