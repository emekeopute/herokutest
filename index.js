const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome home");
});

let PORT = process.env.PORT ? process.env.PORT : 5000;

server.listen(5000, () => {
  console.log("listening on 3000");
});
