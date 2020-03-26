const userRouter = require('express').Router();
const controllers = require('../controllers');

    userRouter.post('/login' , controllers.userController.login);
    userRouter.post('/register' , controllers.userController.register);
    userRouter.get('/:token' , controllers.userController.isAdmin);

module.exports = {
    userRouter
}