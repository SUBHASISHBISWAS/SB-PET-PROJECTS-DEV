const express = require("express");
const cors = require("cors");
const config = require("./config");
const cardRoutes = require("./routes/card-routes");
const path = require("path");
const { corsHeader } = require("./cors");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/images", express.static(path.join("images")));
app.use(cors());
// CORS header
app.use(corsHeader);
app.use("/api", cardRoutes.routes);

module.exports = app;
