const usersService = require('../service/user.service');

const findAllUserController = (req,res) => {
    const users = usersService.findAllUsersService();

    res.send(users);
}


module.exports = {
    findAllUserController,
    
}
