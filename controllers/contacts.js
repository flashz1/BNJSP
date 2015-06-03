var express = require('express'),
    router = express.Router();

router.get('/', function(req, res){
    res.send(req.session.user);
});

module.exports = router;