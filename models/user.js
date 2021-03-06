const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    image: String
});

userSchema.plugin(passportLocalMongoose); // passport add: username and password

module.exports = mongoose.model('User', userSchema);