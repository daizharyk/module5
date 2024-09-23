const { User } = require("../database/models");
module.exports = {
  createUser: async (user) => {
    const newUser = new User(user);
    const result = await User.save();
    return result;
  },
  findAllUser: async () => {
    const users = User.find({});
    return users;
  },
  findUser: async (userId) => {
    const user = await User.findById(userId);
    return user;
  },
  updateUser: async (userId, data) => {
    const updateUser = await User.findByIdAndUpdate(userId, data, {
      new: true,
    });
    return updateUser;
  },
  removeUserForce: async (userId) => {
    await User.findByIdAndRemove(userId);
  },
};
