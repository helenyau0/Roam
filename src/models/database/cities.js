const db = require('./db')

const getAll = (id) => {
  return db.one('SELECT * FROM cities WHERE id = $1', id)
}

module.exports = {
  getAll
}
