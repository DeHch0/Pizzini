const productRouter = require('express').Router();
const controllers = require('../controllers');


productRouter.get('/', controllers.productController.getAll);
productRouter.get('/:id', controllers.productController.getOne);
productRouter.post('/', controllers.productController.create);
productRouter.put('/', controllers.productController.update);


module.exports = {
    productRouter
}