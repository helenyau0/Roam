const db = require('./db')

const getOne = (id) => {
  return db.one('SELECT * FROM cities WHERE id = $1', id)
}

const getAll = () => {
  return db.any('SELECT * FROM cities')
}

const getPost = (id) => {
  return db.any('SELECT cities.id, posts.title, posts.body FROM posts JOIN cities ON posts.city_id = $1;', [id])
}

module.exports = {
  getOne,
  getAll,
  getPost
}
