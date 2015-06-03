var express = require('express'),
    router = express.Router(),
    log = require('../utils/log.js')(module),
    User = require('../models/user');

router.get('/', function(req, res){
    res.render('login');
});

router.post('/', function(req, res, next){
    var username = req.body.username,
        password = req.body.password;

    User.authorize(username, password, function(err, user){
        console.log(user);
        if(err) {
            return log.debug('ERROR');
        }else{
            req.session.user = user._id;
            res.redirect('/');
        }
    });
});

module.exports = router;