const db = require('../data/dbConfig');
const mappers = require('../mappers');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db('trips').select('name', 'date');
}

function findBy(filter) {
  return db('trips').where(filter);
}

async function add(trip) {
  const [id] = await db('trips').insert(trip);

  return findById(id);
}

function findById(id) {
  return db('trips')
    .where({ id })
    .first();
}

function remove(id) {
  return db('trips')
    .where('id', id)
    .del();
}

function update (id, changes) {
  return db('trips')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null))
}