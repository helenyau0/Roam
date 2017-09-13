const db = require('./db')

const dbPosts = {}

dbPosts.findByUserId = id =>
  db.any('SELECT * FROM posts WHERE user_id=$1;', [id])

dbPosts.create = (cityID, userID, body) =>
  db.one(`INSERT INTO posts (title, body, user_id, city_id) VALUES ($1, $2, $3, $4) RETURNING *`, [body.title, body.post, userID, cityID])

dbPosts.findByCityId = id =>
  db.any('SELECT * from posts WHERE city_id = $1', [id])

dbPosts.findById = (id) =>
  db.one('SELECT * FROM posts WHERE id=$1', [id])

dbPosts.update = (id, post) => 
  db.one('UPDATE posts SET title=$1, body=$2 WHERE id=$3 RETURNING *', [post.title, post.body, id])

dbPosts.remove = id => 
  db.one('DELETE FROM posts WHERE id=$1 RETURNING *', [id])

module.exports = dbPosts