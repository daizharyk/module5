const express = require("express");

const app = express();
const api = require("./api/routes");
const PORT = 8080;

app.use("/api", api);
app.listen(PORT, () => {
  console.log(`Server  started ${PORT}`);
});
