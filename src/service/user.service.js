const { v4: uuidv4 } = require('uuid'); // Gerador de ID exclusivo

const users = [
    {
        id: uuidv4(),
        name: 'Ednilson',
        lastname: 'fragoso',
        email: 'edfragoso78@gmail.com'
    },
    {
        id: uuidv4(),
        name: 'Jhon',
        lastname: 'Doe',
        email: 'jd@gmail.com'
    },
    {
        id: uuidv4(),
        name: 'Fulano',
        lastname: 'Da Silva',
        email: 'fdsilva@gmail.com'
    },
];

const findAllUsersService = () => users;

module.exports = {
    findAllUsersService,
}

