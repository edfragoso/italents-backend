const route = require('express').Router();
const users = require('../controller/user.controller')
const { body } = require('express-validator/check');

route.get('/', users.findAllUserController);
route.get('/user/:id', users.findUserByIdController);
route.post('/create',
  body('name').notEmpty(),
  body('lastname').notEmpty(),
  body('email').isEmail(),
  users.createdUserController
);


module.exports = route;
