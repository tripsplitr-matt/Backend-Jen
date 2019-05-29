exports.up = function(knex, Promise) {
  return knex.schema.createTable("expenses", tbl => {
    tbl.increments();

    tbl.string("trip_name").notNullable();

    tbl.string("total_trip_price");

    tbl.string("primary_paid");

    tbl.integer("participants");

    tbl.string("participant_names");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("expenses");
};
