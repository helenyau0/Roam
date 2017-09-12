const pgp = require('pg-promise')()
const cn = process.env.DATABASE || 'postgres://localhost:5432/roam'
const db = pgp(cn)

module.exports = db
