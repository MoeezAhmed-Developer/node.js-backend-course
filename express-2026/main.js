// const express = require("express");
// const app = expres();

// const { MongoClient } = require("mongodb");

// app.get("/", (req, res) => {
//   res.send(`<h1>Hello world!</h1>`);
// });

// app.get("/service", (req, res) => {
//   res.send(`<h1>Hello world from service page!</h1>`);
// });

// app.listen(4000);

// // //

// // const express = require("express");
// import express from "express";
// import heading from "./pages/index.js";
// // import { heading } from "./pages/index.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.send(heading());
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>Hello world! from about page</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Hello world! from contact page</h1>");
// });

// app.listen(4000);

// import express from "express";
// import fs from "fs";
// import heading from "./pages/index.js";
// import { about } from "./pages/index.js";
// import { contat } from "./pages/index.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.send(heading());
// });

// app.get("/about", (req, res) => {
//   res.send(about());
// });

// app.get("/contact", (req, res) => {
//   res.send(contat());
// });

// app.listen(4000);

// import express from "express";

// import { login } from "./pages/login.js";
// import { submit } from "./pages/submit.js";
// import { getData } from "./pages/submit.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Home page</h1>");
// });

// app.get("/login", (req, res) => {
//   res.send(login());
// });

// app.post("/submit", (req, res) => {
//   res.send(getData(req, res), submit(req, res));
//   // res.send();
// });

// app.listen(4000);

// //
// import express from "express";
// import path from "path";

// import { finalPath } from "./view/abspath.js";

// const app = express();
// app.use(express.static(path.resolve("view")));

// app.use((req, res, next) => {
//   next();
// });

// app.get("/", (req, res) => {
//   res.sendFile(finalPath("/index.html"));
// });

// app.get("/login", (req, res) => {
//   res.sendFile(finalPath("/login.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(finalPath("/about.html"));
// });

// app.use((req, res) => {
//   res.status(404).sendFile(finalPath("/404.html"));
// });

// app.listen(3200);

// middleware for age chcek
// import express from "express";
// const app = express();

// function ageCheck(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     res.send("Alert! you ca not access this page.");
//   } else {
//     next();
//   }
// }

// app.use(ageCheck);

// check api

// function apiCheck(req, res, next) {
//   const ip = req.socket.remoteAddress;
//   console.log(ip);
//   if (ip.includes("10.93.7.248")) {
//     res.send("Alert you can not access this page.");
//   } else {
//     next();
//   }
// }

// app.use(apiCheck);

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// app.get("/admin", (req, res) => {
//   res.send("Admin page");
// });

// app.get("/login", (req, res) => {
//   res.send("Login page");
// });

// app.listen(3200);

// import express from "express";
// const app = express();

// function ageCheckMidd(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     res.send("<h1>You are not allowed to use this page.</h1>");
//   } else {
//     next();
//   }
// }

// app.get("/", (req, res) => {
//   res.send("<h1>Home page</h1>");
// });

// app.get("/login", (req, res) => {
//   res.send("<h1>Login page</h1>");
// });

// app.get("/dashboard", ageCheckMidd, (req, res) => {
//   res.send("<h1>Dashboard page</h1>");
// });

// app.get("/product", ageCheckMidd, (req, res) => {
//   res.send("<h1>Product page</h1>");
// });

// app.listen(3200);

// import express from "express";
// import path from "path";
// const app = express();

// // console.log();
// app.use(express.static(path.resolve("public")));
// app.use(
//   express.urlencoded({
//     extended: false,
//   }),
// );

// app.get("/", (req, res) => {
//   const filePath = path.resolve("index.html");
//   res.sendFile(filePath);
// });

// app.get("/login", (req, res) => {
//   res.send(`<form action="/submit" method="post">
//       <input type="email" placeholder="email" name="email" />
//       <input type="password" placeholder="password" name="password" />
//       <button>submit</button>
//     </form>
//     `);
// });

// app.post("/submit", (req, res) => {
//   console.log(req.body);
//   res.send("<h1>Data submit.</h1>");
// });

// app.listen(3200);

// import express from "express";
// import morgan from "morgan";
// const app = express();

// app.use(morgan("dev"));
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/users", (req, res) => {
//   res.send("Users Page");
// });

// app.get("/wait", (req, res) => {
//   setTimeout(() => {
//     res.send("Wait page. Result after 1 second.");
//   }, 1000);
// });

// app.listen(3200);

// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/users", (req, res) => {
//   res.send("Users Page");
// });

// app.get("/error", (req, res, next) => {
//   const error = new Error("");
//   error.status = 404;
//   next(error);
// });

// app.use((err, req, res, next) => {
//   res
//     .status(err.status || 500)
//     .send("Try after some time. We are fixing this issue.");
// });

// app.listen(3200);

// import express from "express";
// const app = express();

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("home", { language: "Node.js", framework: "express js" });
// });
// app.listen(3200);

// import express from "express";
// const app = express();

// app.use(express.urlencoded({ extended: false }));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.post("/submit", (req, res) => {
//   res.render("submit", { name: req.body.username, email: req.body.email });
// });

// app.listen(3200, () => {
//   console.log(`your server runing on: http://localhost:${3200}`);
// });

// import express from "express";
// const app = express();

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   const users = [
//     "moeez",
//     "raza",
//     "ali",
//     "hasan",
//     "huzaifa",
//     "mibsaam",
//     "farah",
//     "maryam",
//     "ahmed",
//     "usman",
//     "zain",
//     "bilal",
//     "hamza",
//     "talha",
//     "umer",
//     "hassan",
//     "saad",
//     "danish",
//     "faizan",
//     "adnan",
//     "jawad",
//     "yasir",
//     "sana",
//     "ayesha",
//     "fatima",
//     "amna",
//     "hira",
//     "zoya",
//     "iqra",
//     "mahnoor",
//     "laiba",
//     "eman",
//     "areeba",
//     "abdullah",
//     "arslan",
//     "shayan",
//     "mustafa",
//     "wahab",
//     "shoaib",
//     "imran",
//     "kashif",
//     "nadeem",
//     "rehan",
//     "fahad",
//     "sameer",
//     "rizwan",
//     "sarmad",
//     "atif",
//     "taha",
//     "rafay",
//   ];

//   const userLogedIn = false;
//   res.render("home", { user: users, userLogedIn });
// });

// app.listen(3200);

// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   const users = [
//     "moeez",
//     "eman",
//     "areeba",
//     "abdullah",
//     "arslan",
//     "shayan",
//     "mustafa",
//     "wahab",
//   ];

//   let userData = "<ul>";
//   for (let i = 0; i < users.length; i++) {
//     userData += `
//     <li><a href="/user/${users[i]}">${users[i]}</a></li>
//     `;
//   }
//   userData += "</ul>";
//   console.log(userData);
//   res.send(userData);
// });

// app.get("/user/:name", (req, res) => {
//   // console.log(req.params.name);
//   // const userName = req.params.name;
//   res.send(`this is the username ${req.params.name}`);
// });

// app.listen(3200);

//

// import express from "express";
// import userData from "./user.json" with { type: "json" };
// const app = express();

// app.get("/user-api", (req, res) => {
//   res.send(userData);
// });

// app.get("/user/:name", (req, res) => {
//   const name = req.params.name;
//   userData.forEach((user) => {
//     if (user.username == name) {
//       res.send(user);
//       return;
//     }
//   });
//   // res.send(filterData);
// });

// app.listen(3200);

// import express from "express";
// import userApi from "./userApi.json" with { type: "json" };
// const app = express();

// app.get("/user-api", (req, res) => {
//   res.send(userApi);
// });

// app.get("/user-api/:id", (req, res) => {
//   const id = req.params.id;
//   const filterData = userApi.filter((api) => api.id == id);
//   res.send(filterData);
// });

// // app.get("/user-api/:name", (req, res) => {
// //   const name = req.params.name;
// //   const filterData = userApi.filter((api) => api.name == name);
// //   console.log(filterData);
// //   res.send(filterData);
// // });

// app.listen(3200);

//

// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// // ===
// const dbName = "MongoDB";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const dbConnection = async () => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("mongodb sample");
//   const result = await collection.find().toArray();
//   console.log(result);
// };

// dbConnection();
// // ===

// app.get("/", (req, res) => {
//   res.send("HI");
// });

// app.listen(3200);

// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// const url = "mongodb://localhost:27017";
// const dbName = "autocompleteDB";
// const client = new MongoClient(url);

// app.set("view engine", "ejs");
// app.get("/", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("items");
//   const result = await collection.find().toArray();
//   console.log(result);
//   res.render("student", { result });
// });

// app.listen(3200);

// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "autocompleteDB";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.set("view engine", "ejs");
// app.get("/", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("items");
//   const result = await collection.find().toArray();
//   res.render("student", { result });
// });
// app.listen(3200);

// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "MongoDB";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.render("form");
// });

// app.post("/submit", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   let collection = db.collection("mongodb sample");
//   await collection.insertOne(req.body);

//   res.send(`${req.name} your Data Submited`);
// });

// app.listen(3200);

// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "autocompleteDB";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// client.connect().then(async (connection) => {
//   const db = connection.db(dbName);
//   const collection = db.collection("items");
//   const result = await collection.find().toArray();
//   console.log(result[7].name, result[7].link);

//   app.get("/api", (req, res) => {
//     res.send(result);
//   });
// });

// const dbConnection = async () => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("mongodb sample");
//   const result = await collection.find().toArray();
//   console.log(result);

//   app.get("/api", (req, res) => {
//     res.send(result);
//   });
// };

// dbConnection();

// app.listen(3200);

// // ==

// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "SeventhStudent";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.get("/add-user", (req, res) => {
//   res.render("studentForm");
// });

// app.post("/submit-user", async (req, res) => {
//   await client.connect().then((connection) => {
//     const db = connection.db(dbName);
//     const collection = db.collection("student");
//     collection.insertOne(req.body);
//   });
//   res.send("User Data Submitted.");
// });

// app.listen(3200);

// // ===
// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "SeventhStudent";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.use(express.json());
// app.post("/add-user-api", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   const result = await collection.insertOne(req.body);
//   const { name, age, email } = req.body;

//   if (!name || !age || !email) {
//     res.send({ message: "Operation failed", success: false });
//     return false;
//   }

//   res.send({ message: "data stored", success: true, result: result });
// });
// app.listen(3200);

// ===

// import express from "express";
// import { MongoClient } from "mongodb";
// const app = express();

// const dbName = "SeventhStudent";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.use(express.json());
// app.post("/add-user-api", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   const result = await collection.insertOne(req.body);

//   //   const { name, age, email } = req.body;
//   if (!req.body.name || !req.body.age || !req.body.email) {
//     res.send("Operation failed");
//     return;
//   }
//   res.send(req.body);
// });

// app.listen(3200);

// import express from "express";
// import { MongoClient, ObjectId } from "mongodb";
// const app = express();

// const dbName = "SeventhStudent";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.use(express.json());
// app.set("view engine", "ejs");

// app.get("/", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   //   collection.insertMany()
//   const result = await collection.find().toArray();

//   res.render("sample", { result });
// });

// app.get("/ui/delete/:id", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   const result = await collection.deleteOne({
//     _id: new ObjectId(req.params.id),
//   });

//   if (result) {
//     res.send("<h1>User record deleted</h1>");
//   } else {
//     res.send("<h1>User record not deleted. Try after few minutes.</h1>");
//   }
// });

// app.listen(3200);

// ===
// import express, { response, urlencoded } from "express";
// import { MongoClient, ObjectId } from "mongodb";
// const app = express();

// const dbName = "SeventhStudent";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.use(express.json());
// app.set("view engine", "ejs");

// app.get("/", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   const result = await collection.find().toArray();

//   res.render("sample", { result });
// });

// app.get("/ui/delete/:id", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   const result = await collection.deleteOne({
//     _id: new ObjectId(req.params.id),
//   });

//   if (result) {
//     res.send("<h1>User record deleted</h1>");
//   } else {
//     res.send("<h1>User record not deleted. Try after few minutes.</h1>");
//   }
// });

// app.get("/ui/student/:id", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   const result = await collection.findOne({
//     _id: new ObjectId(req.params.id),
//   });
//   res.render("form", { result });
// });

// app.use(express.urlencoded({ extended: true }));
// app.post("/ui/updated:id", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");
//   const result = await collection.updateOne(
//     {
//       _id: new ObjectId(req.params.id),
//     },
//     {
//       $set: req.body,
//     },
//   );

//   //   res.send(result);
//   //   console.log(result);

//   res.redirect("/");
// });

// app.post("/updated/:id", async (req, res) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("student");

//   const result = await collection.updateOne(
//     {
//       _id: new ObjectId(req.params.id),
//     },
//     {
//       $set: req.body,
//     },
//   );

//   if()
// });

// app.listen(3200);

//===

// import express from "express";
// import nodemailer from "nodemailer";

// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send(`

//     <form action="/send" method="post">
//   <input type="text" placeholder="name" name="name" /> <br />
//   <input type="email" placeholder="email" name="email" /> <br />
//   <input type="text" placeholder="write your messaeg:" name="message" /> <br />
//   <button>submit</button>
// </form>
// `);
// });

// app.post("/send", async (req, res) => {
//   const { name, email, message } = req.body;
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "moeezahmed1012@gmail.com",
//       pass: "
//
//
//
// ",
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "moeezahmed1012@gmail.com",
//     subject: "New Contact Form Submission",
//     text: `
// Name: ${name}

// Email: ${email}

// Message:
// ${message}
// `,
//   };

//   await transporter.sendMail(mailOptions);
//   res.send("<h1>Email sent successfully!</h1>");
// });

// app.listen(3200);
// /===

// import { Int32 } from "mongodb";
// import mongoose from "mongoose";
// async function dbConnection() {
//   await mongoose.connect("mongodb://localhost:27017/autocompleteDB");
//   //   const schema = mongoose.Schema({
//   //     id: Int32,
//   //     name: String,
//   //     age: Int32,
//   //     city: String,
//   //     profession: String,
//   //     isActive: Boolean,
//   //   });

//   const schema = mongoose.Schema({
//     name: String,
//     link: String,
//   });

//   const studentModel = mongoose.model("items", schema);
//   const result = await studentModel.find();
//   console.log(result);
// }

// dbConnection();

// import mongoose from "mongoose";
// async function dbConnection() {
//   await mongoose.connect("mongodb://localhost:27017/SeventhStudent");
//   const schema = mongoose.Schema({
//     id: Number,
//     name: String,
//     age: Number,
//     city: String,
//     profession: String,
//     isActive: Boolean,
//   });

//   const model = mongoose.model("student", schema);
//   const result = await model.find();
//   console.log(result);
// }

// dbConnection();

// import mongoose, { mongo } from "mongoose";

// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// app.get("/api-call", async (req, res) => {
//   await mongoose.connect("mongodb://localhost:27017/autocompleteDB");
//   const schema = mongoose.Schema({
//     name: String,
//     link: String,
//   });

//   const studentModel = mongoose.model("items", schema);
//   const result = await studentModel.find();
//   res.send(result);
// });

// app.listen(3200);

// ===
// import express from "express";
// import mongoose from "mongoose";
// import studentSchema from "./schema/studentSchema.js";
// import studentModel from "./model/studentModel.js";
// const app = express();

// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// app.post("/post", async (req, res) => {
//   await mongoose.connect("mongodb://localhost:27017/SeventhStudent");
//   const result = await studentModel.create(req.body);
//   console.log(result);
//   res.send(req.body);
// });

// app.listen(3200);

// import express from "express";
// import mongoose from "mongoose";
// const app = express();

// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// app.put("/update/:id", async (req, res) => {
//   const id = req.params.id;
//   await mongoose.connect("mongodb://localhost:27017/autocompleteDB");
//   const sampleSchema = mongoose.Schema({
//     name: String,
//     link: String,
//   });

//   const sampleModel = mongoose.model("items", sampleSchema);
//   await sampleModel.findByIdAndUpdate(id, req.body);
//   res.send("Update");
// });

// app.delete("/delete/:id", async (req, res) => {
//   const id = req.params.id;
//   await mongoose.connect("mongodb://localhost:27017/autocompleteDB");
//   const sampleSchema = mongoose.Schema({
//     name: String,
//     link: String,
//   });

//   const sampleModel = mongoose.model("items", sampleSchema);
//   await sampleModel.findByIdAndDelete(id);
//   res.send("Delete");
// });

// app.listen(3200);

// import express from "express";
// import mongoose from "mongoose";

// const app = express();

// app.use(express.json());
// await mongoose.connect("mongodb://localhost:27017/autocompleteDB");

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

// app.put("/update/:id", async (req, res) => {
//   const id = req.params.id;

//   const schema = mongoose.Schema({
//     name: String,
//     link: String,
//   });

//   const collection = mongoose.model("items", schema);
//   await collection.findByIdAndUpdate(id, req.body);
//   res.send("<h1>Update Success</h1>");
// });

// app.listen(3200);

// import express from "express";
// import nodemailer from "nodemailer";

// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send(`

//     <form action="/send" method="post">
//   <input type="text" placeholder="name" name="name" /> <br />
//   <input type="email" placeholder="email" name="email" /> <br />
//   <input type="text" placeholder="write your messaeg:" name="message" /> <br />
//   <button>submit</button>
// </form>
// `);
// });

// app.use(express.urlencoded({ extended: true }));
// app.post("/send", async (req, res) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "moeezahmed1012@gmail.com",
//       pass: "xdds mijs zcux ioqc",
//     },
//   });

//   const mailOptions = {
//     from: "email",
//     to: "moeezahmed1012@gmail.com",
//     subject: "Test",
//     text: `
//     name: ${req.body.name}

//     email: ${req.body.email}

//     message: ${req.body.message}
//     `,
//   };

//   await transporter.sendMail(mailOptions);
//   res.send("<h1>Email sent successfully!</h1>");
// });

// app.listen(3200);

// === Upload file in node js
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
//     <form action="/upload" method="post" enctype="multipart/form-data">
//   <input type="file" name="myFile" />
//   <button>Upload file</button>
// </form>
// `);
// });

// app.post("/upload", upload.single("myFile"), (req, res) => {
//   res.send("file uploaded");
// });

// app.listen(3200);

// === MongoDB Atlas
// ----------- PPP ---------------

// === Connect MongoDB Atlas with node.js
// import { MongoClient } from "mongodb";
// const dbName = "sampleDB";
// const url =
//   "mongodb+srv://marketingvisionagency_db_user:HmOBqM9v42ZtP2fG@cluster0.twzkdjk.mongodb.net";
// const client = new MongoClient(url);

// client.connect();

// const dbConnection = async () => {
//   const db = client.db(dbName);
//   const collection = db.collection("sampleColl");
//   const result = await collection.find().toArray();
//   result.forEach((each) => {
//     console.log(each.name);
//   });
// };

// dbConnection();

// === Set and get cookies in node.js

// import express from "express";
// const app = express();

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/", (req, res) => {
//   let cookiesData = req.get("cookie");
//   cookiesData = cookiesData.split("=");
//   //   console.log(cookiesData[1]);
//   res.render("index", { name: cookiesData[1] });
// });

// app.post("/profile", (req, res) => {
//   res.setHeader("Set-Cookie", "login=true");
//   res.setHeader("Set-Cookie", `name=${req.body.name}`);
//   let cookiesData = req.get("cookie");
//   cookiesData = cookiesData.split("=");
//   //   console.log(cookiesData[1]);
//   res.render("profile", { name: cookiesData[1] });
// });

// app.listen(3200);

// === Set and get Session in node.js

// import express from "express";
// import session from "express-session";
// const app = express();

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: "apple",
//   }),
// );

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.post("/profile", (req, res) => {
//   req.session.data = req.body;
//   console.log(req.session.data);

//   res.render("profile");
// });

// app.get("/", (req, res) => {
//   const data = req.session.data;
//   res.render("index", { data });
// });

// app.listen(3200);

// === Send Mail with node.js
// import express from "express";
// import nodemailer from "nodemailer";
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//   res.send(`

//         <form action="/submit-form" method="post">
//       <input type="text" placeholder="Student Name" name="username" /> <br />
//       <br />
//       <input type="number" placeholder="Student Age" name="age" /> <br />
//       <br />
//       <input type="email" placeholder="Student Email" name="email" /> <br />
//       <br />
//       <button>Add user</button>
//     </form>
//     `);
// });

// app.post("/submit-form", async (req, res) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "moeezahmed1012@gmail.com",
//       pass: "xdds mijs zcux ioqc",
//     },
//   });

//   const mailOptions = {
//     from: "email",
//     to: "moeezahmed1012@gmail.com",
//     subject: req.body.username + " test",
//     text: `
//     name: ${req.body.username}
//     age: ${req.body.age}
//     email: ${req.body.email}
//   `,
//   };

//   await transporter.sendMail(mailOptions);

//   res.send("Form Submitted.");
// });

// app.listen(3200);

// === Add typescript in node.js

// ===
// import bcrypt from "bcrypt";

// async function hashPassword() {
//   const password = "12345678";
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const result = await bcrypt.compare(password, hashedPassword);

//   console.log(result);
// }

// hashPassword();
