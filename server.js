const express = require("express")
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});