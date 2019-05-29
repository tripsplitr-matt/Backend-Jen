
exports.seed = function(knex, Promise) {

      return knex('table_name').insert([
        {name: 'mario', 
        username: 'mario', 
        password: 'pass',
        email: 'savepeach@gmail.com'},
        {name: 'luigi', 
        username: 'luigi', 
        password: 'pass',
        email: 'letsahgo@gmail.com'},
        {name: 'bowser', 
        username: 'badguy', 
        password: 'pass',
        email: 'bwahaha@gmail.com'},
      ]);
   
};
