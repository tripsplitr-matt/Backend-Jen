exports.up = function(knex, Promise) {
  return knex.schema.createTable("test", tbl => {
    tbl.increments();

    tbl.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("test");
};
