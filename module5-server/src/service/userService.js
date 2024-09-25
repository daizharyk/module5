const ExistingEntityError = require("../infrastructure/errors/ExistingEntityError.js");
const userRepository = require("../repository/userRepository.js");
const InvalidDataError = require("../infrastructure/errors/InvalidDataError.js");
const { generateJWTToken } = require("../utils/jwtToken.js");

module.exports = {
  getAllUsers: async () => {
    const allUsers = await userRepository.findAllUser();
    return allUsers;
  },
  createUser: async (userData) => {
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
  loginUser: async (userData) => {
    const { email, password } = userData;
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser && (await existingUser.checkPassword(password))) {
      const jwtToken = generateJWTToken(existingUser._id);
      return {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        token: jwtToken,
      };
    } else {
      throw new InvalidDataError("Email or password is wrong");
    }
  },
};
