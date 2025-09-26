const express = require("express");
const bodyParser = require("body-parser");
const consultasRouter = require("./routes/consultas");
const campanhasRouter = require("./routes/campanhas");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(bodyParser.json());

app.use("/consultas", consultasRouter);
app.use("/campanhas", campanhasRouter);

// middleware de tratamento de erros (sempre por último)
app.use(errorHandler);

module.exports = app;
