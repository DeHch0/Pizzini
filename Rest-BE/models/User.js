const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: mongoose.SchemaTypes.String
    },
    password: {
        type: mongoose.SchemaTypes.String
    },
});

module.exports = mongoose.model('User' , userSchema)