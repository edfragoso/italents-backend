const usersService = require('../service/user.service');

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
}


module.exports = {
    findAllUserController,
    findUserByIdController
}
