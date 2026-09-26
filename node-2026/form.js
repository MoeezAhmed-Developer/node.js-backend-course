// const http = require("http");
// const fs = require("fs");
// const queryString = require("querystring");

// http
//   .createServer((req, res) => {
//     fs.readFile("form.html", "utf-8", (err, data) => {
//       if (req.url == "/") {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write(data);
//         res.end();
//       } else if (req.url == "/submit") {
//         let dataBody = [];
//         req.on("data", (chunk) => {
//           dataBody.push(chunk);
//         });

//         req.on("end", () => {
//           let rowData = Buffer.concat(dataBody).toString();
//           let readableData = queryString.parse(rowData);
//           //   console.log(readableData.username);

//           res.writeHead(200, { "content-type": "text/html" });
//           res.write(
//             `<h1>Data submitted.</h1>

//              <p>username: ` +
//               readableData.username +
//               `</p>
//              <p>email: ` +
//               readableData.email +
//               `</p>

//               `,
//           );
//           res.end();
//         });
//       }
//     });
//   })
//   .listen(4000);
