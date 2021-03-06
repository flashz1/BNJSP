var express = require('express'),
    router = express.Router(),
    checkAuth = require('../middleware/checkAuth');

router.get('/', checkAuth, function(req, res){
    res.send(req.session.user);
});

module.exports = router;