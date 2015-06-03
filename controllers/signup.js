var express = require('express'),
    router = express.Router(),
    user = require('../models/user'),
    log = require('../utils/log')(module);

router.get('/', function(req, res){
    res.render('signup');
});

router.post('/', function(req, res){
    var username = req.body.username,
        useremail = req.body.useremail,
        password = req.body.password;

    var newUser = new user({
        username: username,
        useremail: useremail,
        password: password
    });

    newUser.save(function(err, user){
        if(err) {
            log.error('Can not create new user');
            res.sendStatus(403);
        }else {
            log.info('User - ' + user.username + ' created successfully!');
            res.redirect('/');
        }
    });
});

module.exports = router;