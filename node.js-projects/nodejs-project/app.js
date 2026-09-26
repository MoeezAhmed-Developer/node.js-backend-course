import express from "express";
import { home } from "./controllers/userController.js";
const app = express();

app.set("view engine", "ejs");
app.get("/", home);

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(3200);
