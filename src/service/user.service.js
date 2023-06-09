const { v4: uuidv4 } = require('uuid'); // Gerador de ID exclusivo

const users = [
  {
    id: uuidv4(),
    name: 'Ednilson',
    lastname: 'fragoso',
    email: 'edfragoso78@gmail.com',
  },
  {
    id: uuidv4(),
    name: 'Jhon',
    lastname: 'Doe',
    email: 'jd@gmail.com',
  },
  {
    id: uuidv4(),
    name: 'Fulano',
    lastname: 'Da Silva',
    email: 'fdsilva@gmail.com',
  },
];

// Buscando todas tarefas da lista
const findAllUsersService = () => users;

// Buscando por ID
const findByIdUserService = (id) => {
  let userId = 0;
  const user = users.map((user, index) => {
    if (user.id === id) {
      userId = index;
      return user;
    }
  });
  return user[userId];
};

// Criando nova tarefa
const createdUserService = (newUser) => {
  newUser.id = uuidv4();
  users.push(newUser);
  return newUser;
};

// Atualizando tarefa
const updateUserService = (id, userEdited) => {
  users.forEach((user, index) => {
    if (user.id === id) {
      userEdited.id = id;
      users[index] = userEdited;
    }
  });
  return userEdited;
};

// Deletar tarefa
const deleteUserService = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    return deletedUser;
  }
  return null;
};

module.exports = {
  findAllUsersService,
  findByIdUserService,
  createdUserService,
  updateUserService,
  deleteUserService,
};
