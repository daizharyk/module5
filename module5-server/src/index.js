const express = require("express");
const errorHandler = require("../src/infrastructure/errorHandle.js");
const app = express();
const api = require("./api/routes");
const PORT = 8080;

// const logger = (req, res, next) => {
//   console.log("Logger working");
//   next();
// };

// app.use(logger);

const auth = (req, res, next) => {
  req.user = "Didar";
  next();
};
app.use(auth);
app.use("/api", api);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server  started ${PORT}`);
});
