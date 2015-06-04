var express = require('express'),
    router = express.Router(),
    checkAuth = require('../middleware/checkAuth');

router.get('/', checkAuth, function(req, res){
    if(req.session.user)
        res.render('profile');
});

module.exports = router;