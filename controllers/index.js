var express = require('express'),
    router = express.Router(),
    log = require('../utils/log.js')(module),
    UsersModel = require('../models/UsersModel');

router.use('/contacts', require('./contacts'));

router.get('/', function(req, res) {
    var users = UsersModel.find({}, function(err, users){
       if(err) return console.log(err);
        return users;
    });
    req.session.numberOfVizits = req.session.numberOfVizits + 1 || 1;
    res.render('index', {vizits: req.session.numberOfVizits, users: users});

    });
//router.get('/:name', function(req, res){
//        var  newUser = new UsersModel({
//            name: req.params.name
//        });
//
//        newUser.save(function(err){
//            if (err)
//                log('Wrong save');
//            console.log('Saved');
//            res.redirect('/');
//        });
//    });

module.exports = router;