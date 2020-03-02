const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String
    },

    description: {
        type: mongoose.SchemaTypes.String
    },

    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },

    imageUrl:{
        type: mongoose.SchemaTypes.String
    },

    price: {
        type: mongoose.SchemaTypes.Number
    },

    brand: {
        type: mongoose.SchemaTypes.String
    },

    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },

    createdOn: {
        type: mongoose.SchemaTypes.Date
    },
});
module.exports = mongoose.model('Product' , productSchema)