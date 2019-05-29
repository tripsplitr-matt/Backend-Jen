exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          name: "mario",
          username: "mario1",
          password: "pass",
          email: "savepeach@gmail.com"
        },
        {
          name: "luigi",
          username: "luigi1",
          password: "pass",
          email: "letsahgo@gmail.com"
        },
        {
          name: "bowser",
          username: "badguy",
          password: "pass",
          email: "bwahaha@gmail.com"
        }
      ]);
    });
};
