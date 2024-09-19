const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, re, next) => {
    try {
      let articles = articleService.getAllArticles();
      res.send(articles);
    } catch (error) {
      next(error);
    }
  },
  creatNewArticle: (req, res, next) => {
    try {
      let user = req.user;
      let newArticle = articleService.creatNewArticle(user);
      res.send(newArticle);
    } catch (error) {
      next(error);
    }
  },
};
