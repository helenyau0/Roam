const dbCities = require('./database/cities')

module.exports = {
  findById: dbCities.findById,
  getAll: dbCities.getAll
}
