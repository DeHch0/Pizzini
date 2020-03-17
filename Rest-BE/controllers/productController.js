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

const create = async (req, res) => {
    let {name, description, imageUrl, price, createdBy, category} = req.body;
    let date = new Date();
    date = helpers.dateFormatter.format(date);
    let creatorId = null;
    // let categoryId = null;

    await models.User.find({username: createdBy.username})
    .then(data => creatorId = data[0]._id)
    .catch(err => res.status(404).send({error: 'User not found !'}).end())

    // await models.Category.findById(Category)
    // .then(data => categoryId = data[0]._id)
    // .catch(err => res.status(404).send({error: 'Category not found !'}).end())

    if(creatorId !== null) {
    models.Product.create({name, description, imageUrl, category , price,createdBy: creatorId, createdOn: date})
    .then(data => res.send('created successfully !').end())
    .catch(data => res.send(data).end())

    }
}

const update = (req, res) => {

    let {id, name, description, imageUrl, price, category} = req.body;

    // console.log(req.body);

    models.Product.updateOne({_id: id}, {name, description, imageUrl, price, category})
    .then(data => res.status(204).send('Updated Successfully !').end())
    .catch(err => res.status(404).send('Error due Update !').end())
}

const remove = (req, res) => {
    
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}