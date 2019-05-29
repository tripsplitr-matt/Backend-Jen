
exports.up = function(knex, Promise) {
  knex.schema.createTable('trips', tbl => {
    tbl.increments()

    tbl
      .string('name', 128).notNullable()

    tbl
      .date('date').notNullable()
      
    tbl
      .integer('base_cost') 

    tbl
      .boolean('complete')

    tbl.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.timestamps(true, true);
    

  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('trips');
};
