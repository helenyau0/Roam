const db = require('./db')

const getByUserId = (id) =>  {
  return db.any('SELECT posts.id, posts.title, posts.body, users.name FROM users JOIN posts ON posts.user_id = $1;', id)
}

const insertPost = (cityID, userID, body) => {
  return db.one(`INSERT INTO posts (title, body, user_id, city_id) VALUES ($1, $2, $3, $4) RETURNING *`, [body.title, body.post, userID, cityID])
}

const getByCityId = (id) => {
  return db.any('SELECT posts.id AS pid, cities.id, posts.title, posts.body FROM posts INNER JOIN cities ON posts.city_id = cities.id WHERE cities.id = $1;', [id])
}

const getById = (id) => {
  return db.one('SELECT * FROM posts WHERE id=$1', [id])
}

const updatePost = (id, post) => {
  return db.one('UPDATE posts SET title=$1, body=$2 WHERE id=$3 RETURNING *', [post.title, post.body, id])
}

module.exports = {
  getByUserId,
  insertPost,
  getByCityId,
  getById,
  updatePost
}