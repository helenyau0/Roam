const user = require('./database/users')

module.exports = {
  get: user.get,
  create: user.create
}
