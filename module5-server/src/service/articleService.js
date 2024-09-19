const NotImplementedError = require("../infrastructure/errors/NotImplementedError");


module.exports = {
  getAllArticles: () => {
    throw new NotImplementedError("Not inplemented");
    return "All articles from service";
  },
  creatNewArticle: (user) => {
    throw new NotImplementedError("Not inplemented");
    return "Creat article from service by" +    user;
  },
};
