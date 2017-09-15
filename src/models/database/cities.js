const db = require('./db')

const dbCities = {}

dbCities.findById = id =>
  db.one('SELECT * FROM cities WHERE id = $1', [id])

dbCities.getAll = () =>
  db.any('SELECT * FROM cities')

dbCities.create = (body) =>
  db.none('INSERT INTO cities(name, image) VALUES($1, $2)', [body.name, body.city_image])

dbCities.findByName = name =>
  db.one('SELECT * FROM cities WHERE name = $1', [name])

module.exports = dbCities
