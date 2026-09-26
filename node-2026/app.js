// const fs = require("fs");
// fs.writeFileSync("moeezAhmed.txt", "My name is Muhammad Moeez.");

// const { cities } = require("./pakCities");
// console.log(cities);

// const os = require("os");
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());

// console.log(process.cwd());
// console.log(process.pid);

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("This code written by Moeez.");
//     res.end();
//   })
//   .listen(4800);

// const colors = require("colors");
// console.log(colors.red("Hi"));
// console.log(colors.green("Hi"));
// console.log(colors.blue("Hi"));

// const http = require("http");

// const age = 19;
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write(
//     `
//     <html>
//     <head>
//     <title>Document by Node</title>
//     </head>
//     <body>
//     <h1>Hello World</h1>
//     <p>Hello World from node js.</p>
//     <h2>` +
//       age +
//       `</h2>
//       <h3>` +
//       new Date() +
//       `</h3>
//     </body>
//     </html>
//     `,
//   );
//   res.end();
// });

// server.listen(4000, () => {
//   console.log("Your server running at: http://localhost:4000");
// });

// //

// const http = require("http");
// const { json } = require("stream/consumers");

// const userData = [
//   {
//     name: "Moeez",
//     age: 19,
//     email: "moeezahmed1012@gmail.com",
//   },
//   {
//     name: "Hasan",
//     age: 18,
//     email: "hasan@gmail.com",
//   },
//   {
//     name: "Huzaifa",
//     age: 15,
//     email: "huzaifa@gmail.com",
//   },
// ];

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.write(JSON.stringify(userData));
//   res.end();
// });

// server.listen(4000, () => {
//   console.log("Your server running at: http://localhost:4000");
// });

//

// const http = require("http");
// http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       res.write("Home Page");
//     } else if (req.url == "/login") {
//       res.write("Login Page");
//     } else if (req.url == "/dashboard") {
//       res.write("Dashboard Page");
//     } else {
//       res.write("Page not found");
//     }
//     res.end();
//   })
//   .listen(4000);

// const arg = process.argv;
// console.log("-----------", arg[3]);

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     fs.readFile("web.html", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "content-type": "text/plain" });
//         res.writable("internal server error");
//         console.log("error");
//         res.end();
//         return;
//       }

//       res.writeHead(200, { "content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(4000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   if (req.url == "/") {
//     res.write(`
//     <form action="/submit" method="post">
//     <input type="text" placeholder="name" />
//     <input type="text" placeholder="email" />
//     <button>submit</button>
//     </form>
//     `);
//   } else if (req.url == "/submit") {
//     res.write("<h1>Data submitted.</h1>");
//   }
//   res.end();
// });

// server.listen(4000, () => {
//   console.log("Your server running at: http://localhost:4000");
// });

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

// const http = require("http");
// const fs = require("fs");
// const queryString = require("querystring");

// http
//   .createServer((req, res) => {
//     fs.readFile("form.html", "utf-8", (err, data) => {
//       if (err) {
//         res.write("internal server error");
//         res.end();
//         return;
//       }

//       if (req.url == "/") {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write(data);
//         res.end();
//       } else if (req.url == "/submit") {
//         let data = [];
//         req.on("data", (chunk) => {
//           data.push(chunk);
//         });

//         req.on("end", () => {
//           let rawData = Buffer.concat(data).toString();
//           let readableData = queryString.parse(rawData);
//           const userData = `username is "${readableData.username}" and username email is "${readableData.email}".`;

//           //   fs.writeFileSync("userData.txt", userData);
//           fs.writeFile(
//             `${readableData.username.toLowerCase()}.txt`,
//             userData,
//             () => {},
//           );
//         });

//         res.end();
//       }
//     });
//   })
//   .listen(4000);

// // crud with file
// const fs = require("fs");
// fs.writeFile("apple.txt", "This is an apple.", () => {});
// // fs.readFile("apple.txt", "utf-8", (err, data) => {
// //   console.log(data);
// // });
// // fs.appendFile("apple.txt", " the apple color is red.", () => {});
// // fs.unlink("apple.txt", () => {});
const path = require("path");

const file = "/abc/sample.txt";
// console.log(path.basename(file));
// console.log(path.dirname(file));
// console.log(path.extname(file));
// console.log(path.isAbsolute(file));
// console.log(path.join(__dirname, "app.js"));
// console.log(path.parse("C:\Users\Muhammad Moeez\Desktop\node-2026\app.js"));
// console.log(path.relative(file));
// console.log(path.resolve(file));

// console.log(path.join(__dirname, "getFiles"));

// const filePath = path.join(__dirname, "routes", "main.js");
// const fileName = path.basename(filePath);
// console.log(path.isAbsolute(fileName));
