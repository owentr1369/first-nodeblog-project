const express = require("express");
const morgan = require("morgan");
const handlebars = require("handlebars");

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Template engines
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
