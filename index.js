const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/core/routes");
const morgan = require("morgan");

const server = express();

server.use(bodyParser.json());
server.use(morgan("tiny"));
server.use(routes);
server.use((err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json(err);
});

server.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("[webserver] Failed to start :(");
    throw err;
  }
  console.log("[webserver] Server on fire on port 8888");
});
