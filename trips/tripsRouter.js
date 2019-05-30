const router = require('express').Router();
const Trips = require('./tripsModel');

const db = require('../data/dbConfig');

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
      const participants = await db('userTrips').where({ trips_id: trip.id })
      trip.participants = participants;
      
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

// bring in array of participants on trips




module.exports = router;
