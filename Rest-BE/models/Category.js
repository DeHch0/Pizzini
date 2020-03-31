const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: mongoose.SchemaTypes.String
    },
    products:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
        default: ''
    }],
    createdBy:{
        type: mongoose.SchemaTypes.String,
    },
    createdOn:{
        type: mongoose.SchemaTypes.Date
    },
});

module.exports = mongoose.model('Category' , categorySchema)