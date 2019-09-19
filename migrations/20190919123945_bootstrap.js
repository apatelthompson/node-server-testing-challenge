exports.up = function(knex) {
  return knex.schema.createTable("spells", tbl => {
    tbl.increments();
    tbl
      .text("spellName", 128)
      .unique()
      .notNullable();
    tbl.text("instructions").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("spells");
};
