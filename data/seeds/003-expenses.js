
exports.seed = function(knex, Promise) {

      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        
      ]);
};
