const models = require('../models');

const getAll = (req, res) => {
    models.Product.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err))
}

const getOne = () => {

}

const create = (req, res) => {
    let {name, description, imageUrl, price} = req.body;

    models.Product.create({name, description, imageUrl, price})
    .then(data => res.send('create successfully !').end())
    .catch(data => res.send(data).end())
}

module.exports = {
    getAll,
    getOne,
    create
}