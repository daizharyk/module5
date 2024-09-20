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
      let user = req.user;
      let data = req.body;
      let newUser = userService.creatNewUser(user , data);
      res.send(newUser);
    } catch (error) {
      next(error);
    }
  },
};
