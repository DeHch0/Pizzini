const mongoose = require('mongoose');
const config = require('../Config/config');

module.exports = mongoose.connect(`${config.mongoHost}`, { useNewUrlParser: true });