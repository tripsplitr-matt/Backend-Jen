
exports.seed = function(knex, Promise) {

      return knex('table_name').insert([
        {name: 'italy', date: '01/01/2020', complete: false},
        {name: 'jersey', date: '03/01/2019', complete: true}
       
      ]);
};
