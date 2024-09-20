const NotImplementedError = require("../infrastructure/errors/NotImplementedError");

module.exports = {
  getAllArticles: () => {
    throw new NotImplementedError("Not inplemented");
    return "All articles from service";
  },
  creatNewArticle: (user, articledata) => {
    // throw new NotImplementedError("Not inplemented");
    const { name, text } = articledata || {};
    return `Create article with name "${name}" and text "${text}" from service by  ${user}`;
  },
};
