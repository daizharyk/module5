const ExistingEntityError = require("../infrastructure/errors/ExistingEntityError.js");
const userRepository = require("../repository/userRepository.js");

module.exports = {
  getAllUsers: async () => {
    const allUsers = await userRepository.findAllUser();
    return allUsers;
  },
  createUser: async ( userData) => {
    const existingUser = await userRepository.findUserByEmail(userData.email);
    if (existingUser) {
      throw new ExistingEntityError("User with this email already exist");
    }
    const newUser = await userRepository.createUser(userData);
    return newUser;
  },
  findUser: async (userId) => {
    const user = await userRepository.findUser(userId);
    return user;
  },
  updateUser: async (userId, data) => {
    const updatedUser = await userRepository.updateUser(userId, data);
    return updatedUser;
  },
  removeUserForce: async (userId) => {
    await userRepository.removeUserForce(userId);
  },
};
