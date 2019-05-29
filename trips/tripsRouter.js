const router = require('express').Router();
const Trips = require('./tripsModel');

router.get('/trips', (req, res) => {
  Trips.find() 
    .then(trips => {
      res.json(trips);
    })
    .catch(err => res.send(err));
});

module.exports = router;