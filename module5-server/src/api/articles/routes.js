const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("articles");
});
router.post("/", (req, res) => {
  res.send("post new article");
});

module.exports = router;
