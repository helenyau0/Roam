const user = require('./database/cities')

module.exports = {
  get: user.get,
  create: user.create
}
