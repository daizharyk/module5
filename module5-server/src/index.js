require("dotenv").config();

const express = require("express");
const errorHandler = require("../src/infrastructure/errorHandle.js");
const app = express();
const api = require("./api/routes");
const database = require("./database/index.js");
const { auth } = require("./middlewares/auth.js");

const PORT = process.env.PORT || 8080;

app.use(express.json());
database();

app.use(auth);
app.use("/api", api);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server  started ${PORT}`);
});
