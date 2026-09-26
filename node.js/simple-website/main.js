const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let collectData = fs.readFileSync("header.html", "utf-8");
  let footerData = fs.readFileSync("footer.html", "utf-8");

  let file = "/";
  if (req.url == "/") {
    file = "/";
  } else {
    file = req.url;
  }

  if (req.url != "/style.css") {
    fs.readFile(`${file.replace("/", "")}.html`, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Server Error!");
        res.end();
      } else {
        res.write(collectData + data + footerData);
        res.end();
      }
    });
  } else if (req.url == "/style.css") {
    fs.readFile("style.css", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Server Error!");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        res.end();
      }
    });
  }
});

const PORT = 3200;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
