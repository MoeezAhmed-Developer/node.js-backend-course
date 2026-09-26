import express from "express";
import path from "path";
import { absPath } from "./absPath.js";

const app = express();

app.use((req, res, next) => {
  next();
});

app.use(express.static(path.resolve("")));

app.get("/", (req, res) => {
  res.sendFile(absPath("/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(absPath("/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(absPath("/contact.html"));
});

app.use((req, res) => {
  res.status(404).send("404");
});

app.listen(3200);
