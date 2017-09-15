const dbCities = require('./database/cities')

module.exports = {
  findById: dbCities.findById,
  getAll: dbCities.getAll,
  create: dbCities.create,
  findByName: dbCities.findByName
}
