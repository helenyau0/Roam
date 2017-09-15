const db = require('./db')

const dbUsers = {}

dbUsers.findByEmail = (email) =>
  db.oneOrNone('SELECT * FROM users WHERE email=$1', [email])

dbUsers.findById = (id) =>
  db.oneOrNone('SELECT * FROM users WHERE id=$1', [id])

dbUsers.findByName = (name) =>
  db.oneOrNone('SELECT * FROM users WHERE name=$1', [name])

dbUsers.create = (user, hash) =>
  db.one('INSERT INTO users (name, email, password, image) VALUES($1, $2, $3) RETURNING *', [user.name, user.email, hash, '/image/squirtle.png'])

dbUsers.update = (id, body) =>
  db.one('UPDATE users SET name=$1, current_city=$2 WHERE id=$3 RETURNING *', [body.name, body.current_city, id])

dbUsers.updatePhoto = (id, body) =>
  db.one('UPDATE users SET image=$1 WHERE id=$2 RETURNING *', [body, id])

module.exports = dbUsers
