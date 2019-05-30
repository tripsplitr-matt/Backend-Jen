
exports.up = function(knex, Promise) {
  return knex.schema.createTable("userTrips", tbl => {
    tbl.increments();

    tbl
    .integer("users_id")
    .unsigned()
    .references("id")
    .inTable("users")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");

    tbl
    .integer("trips_id")
    .unsigned()
    .references("id")
    .inTable("trips")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
  }
  )};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userTrips');
};
