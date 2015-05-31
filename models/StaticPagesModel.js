var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var staticPagesSchema = new Schema({
    name: String,
    title: String,
    content: String
});

var UsersModel = mongoose.model('SaticPagesModel', staticPagesSchema);

module.exports = UsersModel;