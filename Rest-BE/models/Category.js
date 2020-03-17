const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: mongoose.SchemaTypes.String
    },
    // products:{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'Product'
    // },
    // createdBy:{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'User'
    // },
    // createdOn:{
    //     type: mongoose.SchemaTypes.Date
    // },
});

module.exports = mongoose.model('Category' , categorySchema)