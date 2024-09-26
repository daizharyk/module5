const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: async (req, res, next) => {
    try {
      const articles = await articleService.getAllArticles();
      res.send(articles);
    } catch (error) {
      next(error);
    }
  },
  getArticle: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const article = await articleService.findArticle(articleId);
      res.send(article);
    } catch (error) {
      next(error);
    }
  },
  creatNewArticle: async (req, res, next) => {
    try {
      const user = req.user;
      const data = { ...req.body, user: user._id };

      const article = await articleService.creatNewArticle(data);
      res.send(article);
    } catch (error) {
      next(error);
    }
  },
  getMyArticles: async (req, res, next) => {
    try {
      const user = req.user;
      const articles = await articleService.getMyArticles(user._id);
      res.send(articles);
    } catch (error) {
      next(error);
    }
  },
  updateArticle: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const user = req.user;
      const data = req.body;
      const updateArticle = await articleService.updateArticle(
        articleId,
        data,
        user._id
      );
      res.send(updateArticle);
    } catch (error) {
      next(error);
    }
  },
  removeArticle: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const user = req.user;
      await articleService.removeArticle(user._id, articleId);
      res.send("Article deleted!");
    } catch (error) {
      next(error);
    }
  },
  removeArticleForce: async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const user = req.user;
      await articleService.removeArticleForce(user._id, articleId);
      res.send("Article deleted!");
    } catch (error) {
      next(error);
    }
  },
};
