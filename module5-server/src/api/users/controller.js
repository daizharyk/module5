const userService = require("../../service/userService");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  },
  creatNewUser: async (req, res, next) => {
    try {
      const user = req.user;
      const data = req.body;
      const newUser = await userService.createNewUser(user, data);
      res.send(newUser);
    } catch (error) {
      next(error);
    }
  },
  getUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const user = await userService.findUser(userId);
      res.send(user);
    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const data = req.body;
      const updateUser = await userService.updateUser(userId, data);
      res.send(updateUser);
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      await userService.removeUserForce(userId);
      res.send("User deleted!!");
    } catch (error) {
      next(error);
    }
  },
};
