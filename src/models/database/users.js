const db = require('./db')

const dbUsers = {}

dbUsers.findByEmail = (email) =>
  db.oneOrNone('SELECT * FROM users WHERE email=$1', [email])

dbUsers.findById = (id) => 
  db.one('SELECT * FROM users WHERE id=$1', [id])

dbUsers.create = (user, hash) =>
  db.one('INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *', [user.name, user.email, hash])

dbUsers.update = (id, body) => 
  db.one('UPDATE users SET name=$1, current_city=$2 WHERE id=$3 RETURNING *', [body.name, body.current_city, id])

module.exports = dbUsers