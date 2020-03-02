const homeRouter = require('express').Router();
const controllers = require('../controllers');


homeRouter.get('/', controllers.homeController.home);


module.exports = {
    homeRouter
}