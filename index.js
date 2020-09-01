const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome home via github");
});

let PORT = process.env.PORT ? process.env.PORT : 5000;

server.listen(PORT, () => {
  console.log("listening on 3000");
});
