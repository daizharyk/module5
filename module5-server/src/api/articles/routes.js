const { Router } = require("express");
const { getAllArticles, creatNewArticle } = require("./controller");
const router = Router();

router.get("/", getAllArticles);
router.post("/", creatNewArticle);


module.exports = router;
