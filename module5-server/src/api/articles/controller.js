const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, res) => {
    const articles = articleService.getAllArticles();
    res.send(articles);
  },
  creatNewArticle: (req, res) => {
    const newArticle = articleService.creatNewArticle();
    res.send(newArticle);
  },
};
