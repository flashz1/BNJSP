var express = require('express'),
    router = express.Router(),
    log = require('../utils/log.js')(module),
    UsersModel = require('../models/UsersModel');

router.use('/contacts', require('./contacts'));

router
    .get('/', function(req, res) {
        res.render('index');
    })
    .get('/:name', function(req, res){
        var  newUser = new UsersModel({
            name: req.params.name
        });

        newUser.save(function(err){
            if (err)
                log('Wrong save');
            console.log('Saved');
            res.redirect('/');
        });
    });

module.exports = router;