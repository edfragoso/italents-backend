const route = require('express').Router();
const users = require('../controller/user.controller')
const { body } = require('express-validator');

route.get('/', users.findAllUserController);
route.get('/user/:id', users.findUserByIdController);
route.post('/create',
  body('name').notEmpty(),
  body('lastname').notEmpty(),
  body('email').isEmail(),
  users.createdUserController
);
route.put('/user/:id',
  body('name').notEmpty(),
  body('lastname').notEmpty(),
  body('email').isEmail(),
  users.updateUserController
);


module.exports = route;
