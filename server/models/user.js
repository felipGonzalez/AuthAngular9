const mongoose = require('mongoose')
const Shema = mongoose.Schema;

const userSchema = new Shema({
    email: String,
    password: String
});

module.exports = mongoose.model('user',userSchema, 'users')