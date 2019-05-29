exports.seed = function(knex, Promise) {
  return knex("expenses")
    .truncate()
    .then(function() {
      return knex("expenses").insert([
        {
          trip_name: "italy",
          total_trip_price: "8000",
          primary_paid: "mario",
          participants: 3,
          participant_names: "mario, luigi, bowser"
        }
      ]);
    });
};
