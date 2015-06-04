module.exports = function(req, res, next){
    if(!req.session.user) {
        res.redirect(401, '/login');
    }
    next();
};