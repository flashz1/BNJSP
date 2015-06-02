var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    favicon = require('serve-favicon'),
    config = require('./config'),
    log = require('./utils/log.js')(module),
    app = express();
// This will create the global "db" variable
require('./utils/db.js');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('secret here'));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: config.get('session:secret'),
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db})
}));

app.use(require('./controllers'));

db.once('open', function () {
    console.log('Connected to DB: ' + config.get('db:dbName'));
    app.listen(config.get('server:port'), function(){
        log.info('Express server listening on port ' + config.get('server:port'));
    });
});
