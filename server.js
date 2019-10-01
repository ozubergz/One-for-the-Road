const express = require("express");

//Init App
const app = express();

app.use("/public", express.static(__dirname + '/public')); //static file
app.set("view engine", "pug"); //template engine pug

//Home route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

//Start server
app.listen(3000, function() {
  console.log("Server listening on port 3000.")
});