const categoryRoutes = require('express').Router();
const controllers = require('../controllers');


categoryRoutes.get('/', controllers.categoryController.getAll);
categoryRoutes.post('/', controllers.categoryController.create);



module.exports = {
    categoryRoutes
}