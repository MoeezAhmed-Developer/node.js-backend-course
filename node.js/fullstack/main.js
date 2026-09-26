const http = require("http");
const userForm = require("./routes");
const userDataSubmit = require("./userDataSubmit");

http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("content-Type", "text/html");
    userForm(req, res);
    res.end();
  } else if (req.url == "/submit") {
    res.setHeader("content-Type", "text/html");
    userDataSubmit(req, res);
    res.end();
  }
});
//   .listen(3200);
