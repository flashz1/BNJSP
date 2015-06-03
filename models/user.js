var crypto = require('crypto'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    utils = require('../utils');


var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    useremail: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: utils.getDateByFormat()
    }
});

userSchema.methods.encryptPassword = function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
};

userSchema.virtual('password')
    .set(function(password){
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function(){
        return this._plainPassword;
    });

userSchema.methods.checkPassword = function(password){
    return this.encryptPassword(password) === this.hashedPassword;
};

userSchema.statics.authorize = function(username, password, callback){
    return this.findOne({ username: username}, function(err, user){
        if(err) return next(err);
        if(user){
            console.log('User - is ok!');
            if(user.checkPassword(password)){
                console.log('Password - is ok!');
                callback(null, user);
            }else{
                callback(403, 'Wrong password')
            }
        }else{
            callback(404,'Wrong user')
        }
    });
};

var users = mongoose.model('users', userSchema);
module.exports = users;