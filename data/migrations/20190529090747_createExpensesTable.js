
exports.up = function(knex, Promise) {
  knex.schema.createTable('expenses', tbl => {
    tbl.increments()

    tbl
    .string('trip_name').notNullable()
   
  tbl
    .string('total_trip_price')
  
  tbl
    .string('primary_paid')

  tbl
    .integer('participants')

  tbl
    .string('participants_names', 128)


    tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('expenses')
};
