const router = require('express').Router();
const Trips = require('./tripsModel');

router.get('/', (req, res) => {
  Trips.find() 
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.send(err));
});

module.exports = router;
