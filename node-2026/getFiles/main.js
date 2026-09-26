const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let collectHeaderData = fs.readFileSync("header.html", "utf-8");

    let file = "index";
    if (req.url != "/") {
      file = req.url.slice(1);
    }

    if (req.url != "/style.css") {
      fs.readFile(`${file}.html`, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.write("internal server error");
          res.end();
          return false;
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`${collectHeaderData + data}`);
        res.end();
      });
    } else if (req.url == "/style.css") {
      fs.readFile("style.css", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.write("css not found.");
          res.end();
        }
        res.writeHead(200, { "content-type": "text/css" });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(4000);
