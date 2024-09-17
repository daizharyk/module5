const http = require("http");
const PORT = 8080;

// http.createServer(function(req, res) {
//   res.write("Hi");
//   res.end();
// }).listen(PORT , ()=>{
//   console.log("server is running!");
// })

// http.createServer(function(req, res) {
//   res.writeHead(200,{ "Content-Type": "text/html"});
//   res.write("<h1> HI!</h1>");
//   res.end();
// }).listen(PORT , ()=>{
//   console.log("server is running!");
// })
const users = [{ name: "Aman" }, { name: "Dana" }];
const articles = [{ text: "HI!" }, { text: "Yes" }];
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    if(req.url === "/users"){
      res.end(JSON.stringify(users));
    }
    if(req.url === "/articles"){
      res.end(JSON.stringify(articles));
    }
  })
  .listen(PORT, () => {
    console.log("server is running!");
  });
