exports.seed = function(knex, Promise) {
  return knex("trips")
    .truncate()
    .then(function() {
      return knex("trips").insert([
        { name: "italy", date: "01/01/2020", complete: false },
        { name: "jersey", date: "03/01/2019", complete: true }
      ]);
    });
};
