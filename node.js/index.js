// const fs = require("fs");
// const { userName, userEmail } = require("./userEmail.js");
// fs.writeFileSync("sample.txt", "Sample Text.");

// const user = {
//   username: userName,
//   age: 19,
//   email: userEmail,
// };

// console.log(user);

// ===

// const os = require("os");
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.cpus());

// console.log(process.cwd());
// console.log(process.pid);

// // ==
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// http
//   .createServer((req, res) => {
//     let url = req.url;
//     console.log(url);
//     if (req.url == url) {
//       fs.readFile(
//         path.resolve("frontend", `${url}.html`),
//         "utf-8",
//         (err, data) => {
//           if (err) {
//             res.writeHead(500, { "content-type": "text/plain" });
//             res.write("File Not found");
//             res.end();
//           }
//           res.writeHead(200, { "content-type": "text/html" });
//           res.write(data);
//           res.end();
//         },
//       );
//     } else if (req.url == "/style.css") {
//       fs.readFile(
//         path.resolve("frontend", "assets", "css", "style.css"),
//         "utf-8",
//         (err, data) => {
//           if (err) {
//             res.writeHead(500, { "content-type": "text/plain" });
//             res.write("File Not found");
//             res.end();
//           }
//           res.writeHead(200, { "content-type": "text/css" });
//           res.write(data);
//           res.end();
//         },
//       );
//     } else if (req.url == "/script.js") {
//       fs.readFile(
//         path.resolve("frontend", "assets", "js", "script.js"),
//         "utf-8",
//         (err, data) => {
//           if (err) {
//             res.writeHead(500, { "content-type": "text/plain" });
//             res.write("File Not found");
//             res.end();
//           }
//           res.writeHead(200, { "content-type": "application/javascript" });
//           res.write(data);
//           res.end();
//         },
//       );
//     }
//   })
//   .listen(3200, () => {
//     console.log("Server's running.");
//   });

//===
// const colors = require("colors");
// const name = "My Name is Moeez";
// console.log(colors.green(name));

//===
// const http = require("http");
// const userName = "Muhammad Moeez";
// const userAge = 19;
// http
//   .createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.write(`
//         <!doctype html>
//         <html>
//         <head>
//         <title>Node js Sample Page</title>
//         </head>

//         <body>
//         <h1>Hello world!</h1>

//         <h4>Username is ${userName}</h4>
//         <h4>Username age is ${userAge}</h4>

//         <p>Lorem ipsum</p>
//         <a href="#">Click here</a>
//         </body>
//         </html>
//         `);
//     res.end();
//   })
//   .listen(3200);

// ===

// const http = require("http");
// const usersData = [
//   { name: "Moeez", age: 19, email: "moeez@test.com" },
//   { name: "Hasan", age: 17, email: "hasan@test.com" },
//   { name: "Huzaifa", age: 15, email: "huzaifa@test.com" },
// ];

// http
//   .createServer((req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify(usersData));
//     res.end();
//   })
//   .listen(3200);

// ===
// const http = require("http");
// http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       res.write("<h1>Home Page</h1>");
//     } else if (req.url == "/about") {
//       res.write("<h1>About Page</h1>");
//     } else if (req.url == "/contact") {
//       res.setHeader("Content-Type", "text/html");
//       res.write("<h2>Contact Page</h2>");
//     } else {
//       res.write("<h1>Page Not Found!</h1>");
//     }
//     res.end();
//   })
//   .listen(3200);

// === Get input from CMD
// const port = process.argv[2];
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.end("Hello");
//   })
//   .listen(port);

// === Load HTML file
// const http = require("http");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     fs.readFile("index.html", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("File Not found");
//         return;
//       }
//       res.setHeader("Content-Type", "text/html");
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(3200);

// === Make and submit form
// const http = require("http");
// http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       res.setHeader("content-type", "text/html");
//       res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="Enter name" name="username" />
//         <input type="password" placeholder="Enter password" name="password" />
//         <button>Submit</button>
//         </form>
//         `);
//       res.end();
//     } else if (req.url == "/submit") {
//       res.setHeader("content-type", "text/html");
//       res.write("<h1>Data Submitted</h1>");
//       res.end();
//     }
//   })
//   .listen(3200);

// // ===
// const http = require("http");
// const fs = require("fs");
// const queryString = require("querystring");

// http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       fs.readFile("form.html", "utf-8", (err, data) => {
//         if (err) {
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end("File not found");
//           return;
//         }

//         res.setHeader("Content-Type", "text/html");
//         res.write(data);
//         res.end();
//       });
//     } else if (req.url == "/submit") {
//       let dataBody = [];
//       req.on("data", (chunk) => {
//         dataBody.push(chunk);
//       });

//       req.on("end", () => {
//         const rawData = Buffer.concat(dataBody).toString();
//         const readableData = queryString.parse(rawData);

//         const data = `My name is ${readableData.name} and my password is ${readableData.password}`;
//         // // fs.writeFileSync(`${readableData.name.replace(" ", "")}.txt`, data);
//         fs.writeFile(
//           `${readableData.name.replace(" ", "")}.txt`,
//           data,
//           "utf-8",
//           (err) => {
//             if (err) {
//               res.writeHead(500, { "content-type": "text/plain" });
//               res.end("Error");
//             }
//           },
//         );
//       });

//       res.setHeader("Content-Type", "text/html");
//       res.write("<h1>Data submitted.</h1>");
//       res.end();
//     }
//   })
//   .listen(3200);

// === Sync Programming VS Async Programming
// const fs = require("fs");
// // fs.readFile("HasanRaza.txt", "utf-8", (err, data) => {
// //   if (err) {
// //     return;
// //   }

// //   console.log(data);
// // });

// console.log(fs.readFileSync("HasanRaza.txt", "utf-8"));
// console.log("end script");

// ===
// const colors = require("colors");
// console.log(colors.red("Hello"));
// console.log(colors.blue("Hello"));

// === CRUD with file system

// const fs = require("fs");
// fs.writeFile(
//   "create.txt",
//   "Hello It's dummy file to check.",
//   "utf-8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   },
// );

// fs.readFile("create.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.appendFile("create.txt", "\n to Check.", "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.unlink("create.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//=== Path module and Global constant

// const path = require("path");
// const file = "./node.js/sample.txt";

// console.log(path.extname(file)); // to get extension name
// console.log(path.dirname(file)); // to get directory name
// console.log(path.basename(file)); // to get file name
// console.log(path.resolve("sample.txt")); // to complete root folder path
// console.log(path.isAbsolute(file)); // to get isAbsloute

// console.log(__dirname);
// console.log(__filename);

// === Express JS
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact Page");
// });

// app.listen(3200);

// === Use ES import and export
// import express from "express";
// import { fruit } from "./userEmail.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.send(fruit());
// });
// app.listen(3200);

// === Render HTML elements and forms
// import express from "express";
// import { home } from "./home.js";
// import { login } from "./login.js";
// import { dataSubmit } from "./dataSubmit.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.send(home());
// });

// app.get("/login", (req, res) => {
//   res.send(login());
// });

// app.post("/submit", (req, res) => {
//   res.send(dataSubmit());
// });

// app.listen(3200);

// === Render HTML file

// import express from "express";
// import { absPath } from "./userEmail.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(absPath() + "/index.html");
// });

// app.get("/about", (req, res) => {
//   res.sendFile(absPath() + "/about.html");
// });

// app.get("/form", (req, res) => {
//   res.sendFile(absPath() + "/form.html");
// });

// app.use((req, res) => {
//   res
//     .status(404)
//     .send("<h1>404 - Page not found!</h1> <a href='/'>Go Back Home<a>");
// });

// app.listen(3200);

// === Add CSS, statics files  with Express js

// import express from "express";
// import path from "path";
// const app = express();

// const publicPath = path.resolve("public");
// app.use(express.static(publicPath));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("style.html"));
// });
// app.listen(3200);

// === Middleware
// import express from "express";
// const app = express();

// app.use((req, res, next) => {
//   console.log(req.url);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact Page");
// });

// app.listen(3200);

// === Middleware example

// import express from "express";
// const app = express();

// app.use((req, res, next) => {
//   if (!req.query.age || req.query.age <= 18) {
//     return res.send("You can't access this page.");
//   }
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   //   console.log(req.query);
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact Page");
// });

// app.listen(3200);

// === Route Middleware
// import express from "express";
// const app = express();

// function ageCheck(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     return res.send("<h1>You are not allowed to access this page.</h1>");
//   }

//   next();
// }

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

// app.get("/about", ageCheck, (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

// app.get("/portfolio", ageCheck, (req, res) => {
//   res.send("<h1>Portfolio Page</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });

// app.listen(3200);

// === Built-in middlewares in express js

// import express from "express";
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/contact", (req, res) => {
//   res.send(`
//       <form action="/submit" method="post">
//       <input type="text" placeholder="Enter name" name="name" />
//       <input type="password" placeholder="Enter password" name="password" />
//       <button>Submit</button>
//     </form>
//     `);
// });

// app.post("/submit", (req, res) => {
//   console.log("Submitted user data is :", req.body);
//   res.send("Data Submitted.");
// });

// app.listen(3200);

// === External middleware in express js

// import express from "express";
// import morgan from "morgan";
// const app = express();

// // app.use();
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/contact", morgan("dev"), (req, res) => {
//   res.send(`Contact`);
// });

// app.listen(3200);

// === Error Handling middleware

// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/contact", (req, res) => {
//   res.send(`Contact`);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).send("Try after some time.");
// });

// app.listen(3200);

// === Template Engine
// import express from "express";
// import ejs from "ejs";
// const app = express();

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   res.render("index", {
//     name: "Muhammad Moeez",
//     age: 19,
//     email: "moeez@test.com",
//   });
// });

// app.listen(3200);

// ===
// import express from "express";
// const app = express();

// const users = [
//   "Ubaid Ahmed",
//   "Farah Naz",
//   "Muhammad Moeez",
//   "Hasan Raza",
//   "Muhammad Huzaifa",
//   "Umme-e-Maryam",
// ];

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   res.render("index", { users });
// });

// app.listen(3200);

// === Dynamic Routes
// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   const users = ["moeez", "hasan", "huzaifa"];
//   let data = `<ul>`;
//   users.forEach((user) => {
//     data += `<li><a href="user/${user}">Open profile of ${user.toUpperCase()}</a></li>`;
//   });
//   data += "</ul>";

//   res.send(data);
// });

// app.get("/user/:name", (req, res) => {
//   res.send(`This is Profile Page of ${req.params.name.toUpperCase()}.`);
// });
// app.listen(3200);

// === API example with dynamic route
// import express from "express";
// import users from "./users.json" with { type: "json" };
// const app = express();

// app.get("/", (req, res) => {
//   res.send(users);
// });

// app.get("/user/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const data = users.filter((user) => id == user.id);
//   res.send(data);
// });
// app.listen(320);

// === MongoDB connect with nodejs
// import { MongoClient } from "mongodb";
// const client = new MongoClient("mongodb://localhost:27017");

// async function dbConnection() {
//   await client.connect();
//   const db = client.db("node-js");
//   const collection = db.collection("sample");
//   const result = await collection.find().toArray();
//   console.log(result);
// }

// dbConnection();

// === Show mongodb data on ui
// import express from "express";
// import ejs from "ejs";
// import { MongoClient } from "mongodb";

// const app = express();
// const client = new MongoClient("mongodb://localhost:27017");

// app.set("view engine", "ejs");
// app.get("/", async (req, res) => {
//   await client.connect();
//   const db = client.db("node-js");
//   const collection = db.collection("sample");
//   const result = await collection.find().toArray();

//   res.render("ui", { result });
// });

// app.listen(3200);

// === Make API with mongodb
// import express from "express";
// import path from "path";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "node-js";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.get("/", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = await db.collection("sample");
//   const result = await collection.find().toArray();
//   res.send(result);
// });

// app.listen(3200);

// === Save form data in mongodb
// import express from "express";
// import path from "path";
// import { MongoClient } from "mongodb";
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// const dbName = "node-js";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.get("/", async (req, res) => {
//   res.sendFile(path.resolve("form.html"));
// });

// app.post("/submit", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("sample");
//   //   consol;
//   await collection.insertOne(req.body);
//   res.send("Data Stored!");
// });

// app.listen(3200);

// === Post API for save data in mongodb
// import express from "express";
// import path from "path";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "node-js";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.use(express.json());
// app.post("/api", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = await db.collection("sample");
//   if (req.body.age >= 18 && req.body.age <= 30) {
//     await collection.insertOne(req.body);
//     res.send({
//       message: "Data Stored",
//       success: true,
//     });
//   } else {
//     res.send({
//       message: "Your age is not compare to our records.",
//       success: false,
//     });
//   }
// });

// app.listen(3200);

// === Delete API for delete data in mongodb
// import express from "express";
// import path from "path";
// import { MongoClient, ObjectId } from "mongodb";
// const app = express();

// const dbName = "node-js";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.set("view engine", "ejs");
// app.get("/", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = await db.collection("sample");
//   const users = await collection.find().toArray();
//   res.render("ui", { users });
// });

// app.delete("/delete/:id", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = await db.collection("sample");
//   await collection.deleteOne({
//     _id: new ObjectId(req.params.id),
//   });
//   res.send("Record Delete.");
// });

// app.get("/user/delete/:id", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = await db.collection("sample");
//   await collection.deleteOne({
//     _id: new ObjectId(req.params.id),
//   });
//   res.send("Record Delete.");
// });

// app.listen(3200);

// === CORS Issue
// import express from "express";
// import cors from "cors";
// const app = express();

// app.use(cors());
// app.get("/sample", (req, res) => {
//   res.send([
//     { name: "Moeez", age: 19, email: "moeez@test.com" },
//     { name: "Hasan", age: 18, email: "hasan@gmail.com" },
//     { name: "Huzaifa", age: 15, email: "huzaifa@test.com" },
//     { name: "Ubaid", age: 39, email: "ubaid@business.com" },
//     { name: "Farah", age: 35, email: "farah@test.com" },
//   ]);
// });

// app.listen(3200);

//
// import express from "express";
// import multer from "multer";
// const app = express();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.get("/", (req, res) => {
//   res.send(`
// <form action="/upload" method="post" enctype="multipart/form-data">
//   <input type="file" name="myFile" />
//   <button>Upload File</button>
// </form>
// `);
// });

// app.post("/upload", upload.single("myFile"), (req, res) => {
//   res.send("File Upload!");
// });
// app.listen(3200);

//=== Set and Get Cookies in node.js
// import express from "express";
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   const username = req.get("cookie").split("=")[1];
//   res.send(`<h1>Welcome ${username}</h1>`);
// });

// app.get("/signup", (req, res) => {
//   res.send(`<form action="/profile" method="post">
//   <input type="text" placeholder="Enter your name ..." name="username" /> <br/> <br/>
//   <input type="emal" placeholder="Enter your email ..." name="email" /><br/> <br/>
//   <input
//     type="password"
//     placeholder="Enter your password ..."
//     name="password"
//   /> <br/> <br/>
//   <button>Create Account</button>
// </form>`);
// });

// app.post("/profile", (req, res) => {
//   res.setHeader("Set-Cookie", `name=${req.body.username}`);
//   const username = req.get("cookie").split("=")[1];
//   res.send(`<h1>${username} LogedIn</h1> <a href="/">Go to Home Page</a>`);
// });

// app.listen(3200);

// === Set and Get Session in Node.js

// import express from "express";
// import session from "express-session";
// const app = express();

// app.use(
//   session({
//     secret: "Moeez",
//   }),
// );
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   const data = req.session.data;
//   res.send(`<h1>Welcome ${data.username}</h1>`);
// });

// app.get("/signup", (req, res) => {
//   res.send(`<form action="/profile" method="post">
//   <input type="text" placeholder="Enter your name ..." name="username" /> <br/> <br/>
//   <input type="emal" placeholder="Enter your email ..." name="email" /><br/> <br/>
//   <input
//     type="password"
//     placeholder="Enter your password ..."
//     name="password"
//   /> <br/> <br/>
//   <button>Create Account</button>
// </form>`);
// });

// app.post("/profile", (req, res) => {
//   req.session.data = req.body;
//   res.send(`<h1>User LogedIn</h1> <a href="/">Go to Home Page</a>`);
// });

// app.listen(3200);

// ===

// import express from "express";
// import nodemailer from "nodemailer";
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.get("/contact", (req, res) => {
//   res.send(`
// <form action="/send" method="post">
//   <input type="text" placeholder="Enter your name" name="username" />
//   <input type="email" placeholder="Enter your email" name="email" />
//   <input type="text" placeholder="Write your subject" name="subject" />
//   <textarea name="message"></textarea>
//   <button>Send</button>
// </form>
// `);
// });

// app.post("/send", (req, res) => {
//   console.log(req.body);

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "moeezahmed1012@gmail.com",
//       pass: "ezma kvhs bxmo zjdo",
//     },
//   });

//   const mailOption = {
//     from: "email",
//     to: "moeezahmed1012@gmail.com",
//     subject: req.body.subject,
//     text: `
//       Username: ${req.body.username}
//       Email: ${req.body.email}
//       Subject: ${req.body.subject}
//       Mesaage: ${req.body.message}
//     `,
//   };

//   transporter.sendMail(mailOption, (err, info) => {
//     if (err) {
//       res.send("Form Submitted Failed.");
//     } else {
//       res.send("Form Submitted.");
//     }
//   });
// });

// app.listen(3200);

//===