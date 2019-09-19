const router = require("express").Router();

const Spells = require("./spellsModel.js");

router.get("/", (req, res) => {
  Spells.find()
    .then(spells => {
      res.status(200).json(spells);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get spells" });
    });
});

module.exports = router;
