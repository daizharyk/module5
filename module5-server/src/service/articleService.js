const NotImplementedError = require("../infrastructure/errors/NotImplementedError.js");
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
  getMyArticles: async (userId) => {
    const usersArticles = await articleRepository.findUsersArticles(userId);
    return usersArticles;
  },
  creatNewArticle: async (articledata) => {
    const newArticle = await articleRepository.createArticle(articledata);
    return newArticle;
  },
  updateArticle: async (articleId, data, userId) => {
    const article = await articleRepository.findUsersArticle(articleId,userId );
    if (!article) {
      throw new NotImplementedError("Article not found");
    }
    const updateArticle = await articleRepository.updateArticle(
      articleId,
      data
    );

    return updateArticle;
  },
  removeArticle: async (articleId, userId) => {
    const article = await articleRepository.findUsersArticle(articleId,userId );
    if (!article) {
      throw new NotImplementedError("Article not found");
    }
    await articleRepository.removeArticle(articleId, userId);
  },
  removeArticleForce: async (articleId, userId) => {
    const article = await articleRepository.findUsersArticle(articleId,userId );
    if (!article) {
      throw new NotImplementedError("Article not found");
    }
    await articleRepository.removeArticleForce(articleId, userId);
  },
};
