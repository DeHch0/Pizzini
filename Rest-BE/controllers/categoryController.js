const models = require('../models')
const helpers = require('../helpers');

const getAll = (req, res) => {
    models.Category.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err))
}

const create = (req, res) => {
    let {name, createdBy} = req.body;

    let date = new Date();
    date = helpers.dateFormatter.format(date);


    models.Category.create({name, createdOn: date, createdBy})
    .then(data => res.send('create successfully !').end())
    .catch(data => res.send(data).end())
}

module.exports = {
    getAll,
    create,
}