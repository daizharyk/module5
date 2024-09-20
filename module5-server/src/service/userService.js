const NotImplementedError = require("../infrastructure/errors/NotImplementedError");

module.exports = {
  getAllUsers: () => {
    throw new NotImplementedError("Not inplemented");
    return "All users from service";
  },
  createNewUser: (user, userData) => {
    const { name, age } = userData || {};
    return `New user with name '${name}' and age '${age}' from service by ${user}`;
  },
};



