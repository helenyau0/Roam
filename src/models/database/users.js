const db = require('./db')

const email = (email) => {
  console.log('retrieving email from database');
  return db.one('SELECT * FROM users WHERE email=$1', [email])
}

const get = (id) => {
  return db.one('SELECT * FROM users WHERE id=$1', [id])
}

const create = (user, hash) => {
  return db.none('INSERT INTO users (name, email, password) VALUES($1, $2, $3)', [user.name, user.email, hash])
}
//
// const updateUser = () => {
//   return db.one('UPDATE users SET(name) ')
// }

module.exports = {
  get,
  create,
  email
}
