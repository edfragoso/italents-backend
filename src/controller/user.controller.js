const usersService = require('../service/user.service');
const { body, validationResult } = require('express-validator');

const findAllUserController = (req,res) => {
    const users = usersService.findAllUsersService();

    res.send(users);
};

const findUserByIdController = (req,res) => {
    const paramId = req.params.id;
    const chooseUser = usersService.findByIdUserService(paramId);
    if(chooseUser !== undefined){
        res.status(200).send(chooseUser)
    } else {
        res.status(404).send({message: 'User not found'})
    }
};

const createdUserController = (req,res) => {
    const user = req.body;
    if(user.name === undefined || user.lastname === undefined || user.email === undefined){
        res.status(400).send({ message: "Incomplete data, please fill in all fields to proceed"})
    } else {
        const newUser = usersService.createdUserService(user);
        res.status(200).send({ message: "user added successfully", data: newUser})
    };
}


module.exports = {
    findAllUserController,
    findUserByIdController,
    createdUserController
}
