const express = require("express");
const bodyParser = require("body-parser");
const mroute = require("../index");

const routerConfig = require("./routerConfig");

const routes = require("./routers");
const filters = require("./filters");
const validators = require("./validators");
const suffixs = require("./suffixs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mroute.express(app, routerConfig, {
  routes,
  filters,
  validators,
  suffixs,
});

app.listen(8088, () => {
  process.on("uncaughtException", err => {
    console.error("Caught exception:", err.stack);
  });
  process.on("unhandledRejection", (reason, p) => {
    console.error(
      "Unhandled Rejection at: Promise ",
      p,
      "reason: ",
      reason.stack
    );
  });
});
