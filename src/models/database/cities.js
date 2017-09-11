const db = require('./database/db')

const getAll = (id) => {
  return db.one('SELECT * FROM cities WHERE id = $1', id)
}

const getPost = (id) =>  {
  return db.one('SELECT * FROM posts WHERE city_id = $1', id)
}
module.exports = {
  getAll,
  getPost
}
