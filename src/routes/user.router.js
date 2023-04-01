const route = require('express').Router();
const users = require('../controller/user.controller')

route.get('/', users.findAllUserController);
route.get('/user/:id', users.findUserByIdController)


module.exports = route;
