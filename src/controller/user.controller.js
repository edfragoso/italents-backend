const usersService = require('../service/user.service');
const { validationResult } = require('express-validator');

const findAllUserController = async (req, res) => {
  try {
    const users = await usersService.findAllUsersService();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

const findUserByIdController = async (req, res, next) => {
  try {
    const paramId = req.params.id;
    const chooseUser = await usersService.findByIdUserService(paramId);
    if (chooseUser !== undefined) {
      res.status(200).send(chooseUser);
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};

const createdUserController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({
        message: 'Invalid or incomplete data',
        errors: errors.array(),
      });
    } else {
      const user = req.body;
      const newUser = await usersService.createdUserService(user);
      res
        .status(201)
        .send({ message: 'User created successfully', data: newUser });
    }
  } catch (error) {
    res.status(422).send({
      message: 'An error occurred while creating the user',
      error: error.message,
    });
  }
};

const updateUserController = async (req, res) => {
  const idParam = req.params.id;
  const userEdited = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({
        message: 'Invalid or incomplete data',
        errors: errors.array(),
      });
    } else {
      const newUser = await usersService.updateUserService(idParam, userEdited);
      res
        .status(200)
        .send({ message: 'User updated successfully', data: newUser });
    }
  } catch (error) {
    res.status(500).send({
      message: 'An error occurred while updating the user',
      error: error.message,
    });
  }
};

const deleteUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }

    const deletedUser = usersService.deleteUserService(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res
      .status(200)
      .json({ message: 'User deleted successfully', data: deletedUser });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred while deleting the user',
      error: error.message,
    });
  }
};

module.exports = {
  findAllUserController,
  findUserByIdController,
  createdUserController,
  updateUserController,
  deleteUserController,
};
