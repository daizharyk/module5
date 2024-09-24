const { Router } = require("express");
const { getAllArticles, creatNewArticle, getArticle, updateArticle, removeArticle, removeArticleForce } = require("./controller");
const router = Router();

router.get("/", getAllArticles);

router.post("/", creatNewArticle);

router.get("/:id", getArticle);

router.put("/:id", updateArticle);

router.delete("/:id", removeArticle);

router.delete("/force/:id", removeArticleForce);




module.exports = router;
