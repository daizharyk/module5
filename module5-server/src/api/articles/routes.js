const { Router } = require("express");
const { getAllArticles, creatNewArticle, getArticle, updateArticle, removeArticle, removeArticleForce } = require("./controller");
const router = Router();
const {protected} = require("../../middlewares/auth")

router.get("/",  getAllArticles);

router.post("/", protected, creatNewArticle);

router.get("/:id", getArticle);

router.put("/:id",protected, updateArticle);

router.delete("/:id", protected,removeArticle);

router.delete("/force/:id",protected, removeArticleForce);




module.exports = router;
