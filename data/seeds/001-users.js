exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          name: "Mario",
          username: "mario1",
          password: "pass",
          email: "savepeach@gmail.com",
        },
        {
          name: "Luigi",
          username: "luigi1",
          password: "pass",
          email: "letsahgo@gmail.com"
        },
        {
          name: "Bowser",
          username: "badguy",
          password: "pass",
          email: "bwahaha@gmail.com"
        },
        {
          name: "Peach",
          username: "princess",
          password: "pass",
          email: "peachy@gmail.com"
        },
        {
          name: "Joe",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Matt",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "David",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jon",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Ryan",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jen",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jack",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jill",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Mike",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Katie",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Bill",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        }


      ]);
    });
};
