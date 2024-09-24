const usersRepository = require("../repository/usersRepository");

module.exports = {
  getAllUsers: async () => {
    const allUsers = await usersRepository.findAllUser();
    return allUsers;
  },
  createNewUser: async (user, userData) => {
    const newUser = await usersRepository.createUser(userData);
    return newUser;
  },
  findUser: async (userId) => {
    const user = await usersRepository.findUser(userId);
    return user;
  },
  updateUser: async (userId, data) => {
    const updatedUser = await usersRepository.updateUser(userId, data);
    return updatedUser;
  },
  removeUserForce: async (userId) => {
    await usersRepository.removeUserForce(userId);
  },
};

