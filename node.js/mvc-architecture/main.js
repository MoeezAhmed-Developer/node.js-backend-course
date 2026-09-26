import express from "express";
import { cntroller } from "./controller/controller.js";
const app = express();

app.set("view engine", "ejs");
app.get("/", cntroller);

// app.listen(3200);
