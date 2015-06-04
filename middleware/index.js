var loadUser = require('./loadUser');

module.exports = function(req, res, next) {
    return loadUser.call(this, req, res, function(){
        next();
    });
};