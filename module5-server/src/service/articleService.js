const articleRepository = require("../repository/articleRepository.js");
module.exports = {
  getAllArticles: async () => {
    const articles = await articleRepository.findAllArticles();
    return articles;
  },
  findArticle: async (articleId) => {
    const article = await articleRepository.findArticle(articleId);
    return article;
  },
  creatNewArticle: async (user, articledata) => {
    const newArticle = await articleRepository.createArticle(articledata);
    return newArticle;
  },
  updateArticle: async (articleId, data) => {
    const updateArticle = await articleRepository.updateArticle(
      articleId,
      data
    );
    return updateArticle;
  },
  removeArticle: async (articleId) => {
    await articleRepository.removeArticle(articleId);
  },
  removeArticleForce: async (articleId) => {
    await articleRepository.removeArticleForce(articleId);
  },
};

