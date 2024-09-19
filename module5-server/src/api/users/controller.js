const userService = require("../../service/userService");

module.exports = {
  getAllUsers: (req, res, next) => {
    try {
      let users = userService.getAllUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  },
  creatNewUser: (req, res, next) => {
    try {
      let newUser = userService.creatNewUser();
      res.send(newUser);
    } catch (error) {
      next(error);
    }
  },
};
