require('dotenv').config()

const db = require('../data/dbConfig');
const Users = require('./usersModel');

describe('users model', () => {

  beforeEach(async () => {
    await db('users').truncate();  
  })

  describe('get all()', () => {
    it('should always return an array, even if no games are stored', async () => {
      const users = await db('users');
      expect(users)
    })
  })
})