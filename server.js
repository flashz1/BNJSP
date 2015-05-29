var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    log = require('./utils/log.js')(module),
    config = require('./config'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('my secret here'));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(require('./controllers'));

app.listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});
