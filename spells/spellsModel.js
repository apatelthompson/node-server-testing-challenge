const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function find(id) {
  return db("spells").select("id", "spellName", "instructions", "subject");
}

function findBy(filter) {
  return db("spells").where(filter);
}

function add(spell) {
  return db("spells")
    .insert(spell, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("spells")
    .where({ id })
    .first();
}

function remove(id) {
  const deletedSpell = findById(id);
  return db("spells")
    .where({ id })
    .del();
}
