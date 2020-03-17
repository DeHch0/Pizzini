const models = require('../models')

const getAll = (req, res) => {
    models.Category.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err))
}

const create = (req, res) => {
    let {name} = req.body;

    models.Category.create({name})
    .then(data => res.send('create successfully !').end())
    .catch(data => res.send(data).end())
}

module.exports = {
    getAll,
    create,
}