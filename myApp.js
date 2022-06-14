let express = require('express');
let app = express();
console.log(__dirname);
console.log("Hello Worldi");

let public_path = __dirname + "/public"
app.use("/public", express.static(public_path))

app.get("/", (req, res) => {
  let absolutePath = __dirname + "/views/index.html"
  res.sendFile(absolutePath);
});
































 module.exports = app;
