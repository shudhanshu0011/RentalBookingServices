import express from "express";
import data from "./data.js";

const app = express();
// const mysql = require("mysql");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "golu111999",
//   database: "myprojects",
// });

app.get("/productlist", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  console.log("runnig on port 3001");
});
