const server = require("./api/server.js");
const defaults = require("./config/default.js");

server.listen(defaults.port, () =>
  console.log(`\n** Running on port ${defaults.port} **\n`)
);
