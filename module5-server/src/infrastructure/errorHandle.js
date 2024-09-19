const NotImplementedError = require("./errors/NotImplementedError");

const errorHandler = (err, req, res, next) => {
  console.error("Error-", err);
  if (err instanceof NotImplementedError) {
    res.sendStatus(404);
  } else {
    res.status(500).send("Sometiong goes wrong");
  }
};

module.exports = errorHandler;
