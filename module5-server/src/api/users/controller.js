const userService = require("../../service/userService");

module.exports = {
  getAllUsers: (req, res) => {
    const users = userService.getAllUsers();
    res.send(users);
  },
  creatNewUser: (req, res) => {
    const newUser = userService.creatNewUser();
    res.send(newUser);
  },
};
