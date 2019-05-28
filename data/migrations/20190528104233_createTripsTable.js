
exports.up = function(knex, Promise) {
  knex.schema.createTable('trips', tbl => {
    tbl.increments()

    tbl
      .string('name', 128).notNullable()

  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('trips');
};
