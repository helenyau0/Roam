const city = require('./database/cities')

module.exports = {
  getOne: city.getOne ,
  getAll: city.getAll,
  getPost: city.getPost
}
