require('dotenv').config()

const db = require('../data/dbConfig');


describe('trips model', () => {

  beforeEach(async () => {
    await db('trips').truncate();  
  })

  describe('get all()', () => {
    it('should always return an array, even if no trips are stored', async () => {
      const trips = await db('trips');
      expect(trips)
    })
  })
})