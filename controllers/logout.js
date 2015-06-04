var express = require('express'),
    router = express.Router(),
    log = require('../utils/log.js')(module),
    User = require('../models/user');

router.post('/', function(req, res){
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;