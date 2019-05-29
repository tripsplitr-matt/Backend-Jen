const router = require('express').Router();
const Trips = require('./tripsModel');

// retrieve full list of trips
router.get('/', (req, res) => {
  Trips.find() 
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.send(err));
});

// retrieve specific trip by id #
router.get('/:id', async (req, res) => {
  try {
    const trip = await Trips.findById(req.params.id);

    if (trip) {
      res.status(200).json(trip);
    } else {
      res.status(404).json({ message: 'Trip not found' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving your trip',
    });
  }
});

module.exports = router;
