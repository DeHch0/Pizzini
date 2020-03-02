const productRouter = require('express').Router();
const controllers = require('../controllers');


productRouter.get('/', controllers.productController.getAll);
productRouter.post('/', controllers.productController.create);


module.exports = {
    productRouter
}