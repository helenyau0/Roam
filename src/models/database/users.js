const db = require('./db')

const find = (email) => {
  return db.one('SELECT * FROM users WHERE email=$1', [email])
}

const get = (id) => {
  return db.one('SELECT * FROM users WHERE id=$1', [id])
}

const create = (user, hash) => {
  return db.none('INSERT INTO users (name, email, password) VALUES($1, $2, $3)', [user.name, user.email, hash])
}

const update = (id, body) => {
  return db.one('UPDATE users SET name=$1, current_city=$2 WHERE id=$3 RETURNING *', [body.name, body.current_city, id])
}


module.exports = {
  get,
  create,
  find,
  update
}
