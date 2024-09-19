const NotImplementedError = require("../infrastructure/errors/NotImplementedError");

module.exports = {
  getAllUsers: () => {
    throw new NotImplementedError("Not inplemented");
    return "All users from service";
  },
  creatNewUser: (user) => {
    throw new NotImplementedError("Not inplemented");
    return "New user from service";
  },
};
