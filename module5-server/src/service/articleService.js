
const articlesRepository = require("../repository/atyiclesRepository.js");
module.exports = {
  getAllArticles: async () => {
    const articles = await articlesRepository.findAllArticles();
    return articles;
  },
  findArticle: async (articleId) => {
    const article = await articlesRepository.findArticle(articleId);
    return article;
  },
  creatNewArticle: async (user, articledata) => {
    const newArticle = await articlesRepository.createArticle(articledata);
    return newArticle;
  },
  updateArticle: async (articleId, data) => {
    const updateArticle = await articlesRepository.updateArticle(
      articleId,
      data
    );
    return updateArticle;
  },
  removeArticle: async (articleId) => {
    await articlesRepository.removeArticle(articleId);
  },
  removeArticleForce: async (articleId) => {
    await articlesRepository.removeArticleForce(articleId);
  },
 
};
