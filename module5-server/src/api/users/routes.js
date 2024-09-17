const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("users");
});
router.post("/", (req, res) => {
  res.send("post new user");
});

module.exports = router;
