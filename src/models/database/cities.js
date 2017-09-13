const db = require('./db')

const dbCities = {} 

dbCities.findById = id => 
  db.one('SELECT * FROM cities WHERE id = $1', [id])

dbCities.getAll = () =>
  db.any('SELECT * FROM cities')

module.exports = dbCities
