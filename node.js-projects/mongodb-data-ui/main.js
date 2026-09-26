import express from "express";
import ejs from "ejs";
import { MongoClient, ObjectId } from "mongodb";
const app = express();

const client = new MongoClient("mongodb://localhost:27017");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  await client.connect();
  const db = client.db("uiData");
  const collection = db.collection("data");
  const students = await collection.find().toArray();
  res.render("index", { students });
});

app.get("/delete/:id", async (req, res) => {
  await client.connect();
  const db = client.db("uiData");
  const collection = await db.collection("data");
  await collection.deleteOne({ _id: new ObjectId(req.params.id) });
  res.send("Student Record Deleted.");
});

app.get("/ui/update/:id", async (req, res) => {
  await client.connect();
  const db = client.db("uiData");
  const collection = await db.collection("data");
  const result = await collection.findOne({ _id: new ObjectId(req.params.id) });
  res.send(`<form action="/update/${req.params.id}" method="post">
    <input type="text" placeholder="Enter name" value="${result.name}" name="name" /> <br /> <br />
    <input type="text" placeholder="Enter Father name" value="${result.fname}" name="fname"> <br /> <br />
    <input type="text" placeholder="Enter class" value="${result.class}" name="class"> <br /> <br />
    <input type="text" placeholder="Enter Roll No." value="${result.rollNumber}" name="rollNumber" /> <br /> <br />
    <button>Update student</button></form>`);
});

app.post("/update/:id", async (req, res) => {
  await client.connect();
  const db = client.db("uiData");
  const collection = await db.collection("data");
  await collection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body },
  );
  res.send("Student Record Updated.");
});

// app.listen(3200);
