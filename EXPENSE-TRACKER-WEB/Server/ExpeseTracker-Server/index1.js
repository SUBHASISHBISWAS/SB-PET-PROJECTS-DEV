"use strict";

const express = require("express");
const cors = require("cors");
const config = require("./config");
const cardRoutes = require("./routes/card-routes");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use("/api", cardRoutes.routes);

app.listen(config.port, () => {
  console.log("App is Listening on URL http://localhost " + config.port);
});
