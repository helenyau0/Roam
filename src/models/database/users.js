const db = require('./database/db')

const get = (id) => {
  return db.one('SELECT * FROM users WHERE id=$1', [id])
}

const create = (user) => {
  return db.none('INSERT INTO users (name, email, password) VALUES($1, $2, $3)', [user.name, user.email, user.password])
}
//
// const updateUser = () => {
//   return db.one('UPDATE users SET(name) ')
// }

module.exports = {
  get,
  create
}
