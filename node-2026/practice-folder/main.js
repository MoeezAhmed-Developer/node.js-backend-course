// // core module check

// const os = require("os");
// console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.platform());

// // creating server
const http = require("http");
const { endianness } = require("os");
// http
//   .createServer((req, res) => {
//     res.write("node js server");
//     res.end();
//   })
//   .listen(4000);

// // third party module install
// const colors = require("colors");
// console.log(colors.red("hi"));

// // response handling

// http
//   .createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.write(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>Hello from node js</h1>
// </body>
// </html>
//         `);
//     res.end();
//   })
//   .listen(4000);

// // api creating

// const userData = [
//   {
//     id: 1,
//     username: "Moeez",
//     email: "moeez@example.com",
//     age: 19,
//     city: "Karachi",
//   },
//   {
//     id: 2,
//     username: "Ali",
//     email: "ali@example.com",
//     age: 22,
//     city: "Lahore",
//   },
//   {
//     id: 3,
//     username: "Ahmed",
//     email: "ahmed@example.com",
//     age: 25,
//     city: "Islamabad",
//   },
// ];

// http
//   .createServer((req, res) => {
//     res.write(JSON.stringify(userData));
//     res.end();
//   })
//   .listen(4000);

// // reques handling

// http
//   .createServer((req, res) => {
//     if (req.url == "/" || req.url == "/home") {
//       res.write("<h1>Home page</h1>");
//       res.end();
//     } else if (req.url == "/service") {
//       res.write("<h1>Service page</h1>");
//       res.end();
//     } else if (req.url == "/about") {
//       res.write("<h1>About page</h1>");
//       res.end();
//     } else {
//       res.setHeader("Content-Type", "text/html");
//       res.write("<h1>Not found</h1>");
//       res.end();
//     }
//   })
//   .listen(4000);

// // get html pag in node
const fs = require("fs");
// http
//   .createServer((req, res) => {
//     fs.readFile("web.html", "utf-8", (err, data) => {
//       if (err) {
//         res.write("internal server error");
//         res.end();
//         return;
//       }
//       res.writeHead(200, { "content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(4000);

// // get input data from form

// const queryString = require("querystring");
// http
//   .createServer((req, res) => {
//     fs.readFile("form.html", "utf-8", (err, data) => {
//       if (req.url == "/") {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write(data);
//         res.end();
//       } else if ("/submit") {
//         let data = [];
//         req.on("data", (chunk) => {
//           data.push(chunk);
//         });

//         req.on("end", () => {
//           let bufferData = Buffer.concat(data).toString();
//           let readableData = queryString.parse(bufferData);
//           console.log(readableData);
//         });
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write("<h1>Data submitted.</h1>");
//         res.end();
//       }
//     });
//   })
//   .listen(4000);
