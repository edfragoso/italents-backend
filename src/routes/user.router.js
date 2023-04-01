const route = require('express').Router();
const users = require('../controller/user.controller');
const { body, param } = require('express-validator');

route.get('/', users.findAllUserController);
route.get('/user/:id', users.findUserByIdController);
route.post(
  '/create',
  body('name').notEmpty(),
  body('lastname').notEmpty(),
  body('email').isEmail(),
  users.createdUserController,
);
route.put(
  '/user/:id',
  body('name').notEmpty(),
  body('lastname').notEmpty(),
  body('email').isEmail(),
  users.updateUserController,
);
route.delete(
  '/user/:id',
  [param('id').isUUID().withMessage('Invalid user ID')],
  users.deleteUserController,
);

module.exports = route;
