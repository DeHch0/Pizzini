const models = require('../models');
const helpers = require('../helpers');

const getAll = (req, res) => {
    models.Product.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err))
}

const getOne = (req, res) => {
    const { id } = req.params;

    models.Product.findById(id)
    .then(data => {
        res.send(data);
    }).catch(e => {
        res.send(e);
    });

}

const create = (req, res) => {
    let {name, description, imageUrl, price, createdBy} = req.body;
    let date = new Date();
    date = helpers.dateFormatter.format(date);
    let creatorId = null;

    // models.Product.create({name, description, imageUrl, price})
    // .then(data => res.send('create successfully !').end())
    // .catch(data => res.send(data).end())
}

module.exports = {
    getAll,
    getOne,
    create
}