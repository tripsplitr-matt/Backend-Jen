const router = require('express').Router();
const Users = require ('./usersModel');
// const restricted = require('../auth/restricted-middleware');

// retrieve all users
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      console.log('users');
      res.json(users);
    })
    .catch(err => res.send(err));
});

// retrieve specific users by id #
router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the person you\'re looking for',
    });
  }
});

module.exports = router;
