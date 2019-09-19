const express = require("express");

const spellsRouter = require("../spells/spellsRouter.js");

const server = express();

server.use(express.json());

server.use("/api/spells", spellsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
