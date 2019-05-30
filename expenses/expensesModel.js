const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('expenses').select('name', 'date');
}

function findBy(filter) {
  return db('expenses').where(filter);
}

async function add(trip) {
  const [id] = await db('expenses').insert(trip);

  return findById(id);
}

function findById(id) {
  return db('expenses')
    .where({ id })
    .first();
}
