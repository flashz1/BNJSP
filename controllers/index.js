var express = require('express'),
    router = express.Router(),
    log = require('../utils/log.js')(module),
    user = require('../models/user');

router.use('/signup', require('./signup'));
router.use('/login', require('./login'));
router.use('/contacts', require('./contacts'));

router.get('/', function(req, res) {
    user.find({}, function(err, users, next){
        if(err) return next(err);
        req.session.numberOfVizits = req.session.numberOfVizits + 1 || 1;
        var numberOfVizits = req.session.numberOfVizits;
        res.render('index', {vizits: numberOfVizits, users: users});
    });
});

router.get('/:userId', function(req, res) {
    user.findById({_id: req.params.userId }, function(err, user, next){
        if(err) return next(err);
        res.json(user);
    });
});

module.exports = router;