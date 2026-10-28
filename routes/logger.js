const fs = require("fs");

function logger(req, res, next) {
  const data = `${req.method} ${req.url} ${new Date().toISOString()}\n`;

  fs.appendFileSync("logger.txt", data);

  next();
}

module.exports = logger;