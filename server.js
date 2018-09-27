const express = require("express");
const app = express();
const hb = require("express-handlebars");
const {
    getFirstPage,
    getProjetosComerciaisPage
} = require("./controllers/views");
app.use(express.static("public"));

app.engine("handlebars", hb());

app.set("view engine", "handlebars");

app.get("/", getFirstPage);

app.get("/projetos/comerciais", getProjetosComerciaisPage);

app.listen(2020);
