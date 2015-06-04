module.exports = function(req, res, next){

    log().warn('Not found URL: %s',req.url);
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { title: '404 Not found' });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({error: 'Not found'});
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
};