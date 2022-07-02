const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "./public/index.html");
});

app.get("/api/bears/:id?", function (req, res) {
  res.json([
    { name: "Teddy" },
    { name: "Vinnie" },
    { name: "Paddington" },
    { name: "Jerry" },
  ]);
});

app.listen(3000);
