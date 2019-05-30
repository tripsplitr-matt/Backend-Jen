
exports.up = function(knex, Promise) {
  return knex.schema.createTable("userExpenses", tbl => {
    tbl.increments();

    tbl
    .integer("users_id")
    .unsigned()
    .references("id")
    .inTable("users")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");

    tbl
    .integer("expenses_id")
    .unsigned()
    .references("id")
    .inTable("expenses")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
  }
  )};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userExpenses');
};
