const db = require('./db')

const getOne = (id) => {
  return db.one('SELECT * FROM cities WHERE id = $1', id)
}

const getAll = () => {
  return db.any('SELECT * FROM cities')
}

const remove = (id) => {
  return db.one('DELETE FROM posts WHERE id=$1 RETURNING *', [id])
}

module.exports = {
  getOne,
  getAll,
  remove
}
