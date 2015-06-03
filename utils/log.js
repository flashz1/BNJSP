var winston = require('winston'),
    utils = require('./');

function getLogger(module) {
    var path = module.filename.split('/').slice(-2).join('/'); //отобразим метку с именем файла, который выводит сообщение

    return new winston.Logger({
        transports : [
            new winston.transports.Console({
                colorize:   true,
                level:      'debug',
                label:      path
            }),
            new winston.transports.File({
                filename: __dirname + '/log/logs.log',
                label: path,
                timestamp: function () {
                    return utils.getDateByFormat();
                },
                options: {
                    flags: 'a',
                    highWaterMark: 24
                }
            })
        ]
    });
}

module.exports = getLogger;