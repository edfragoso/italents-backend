const route = require('express').Router();
const users = require('../controller/user.controller')

route.get('/', users.findAllUserController);


module.exports = route;
