const router = require('express').Router()
const dbCities = require('../../models/cities')

router.get('/', (req, res) => {
  dbCities.getAll()
  .then(cities => {
  res.render('index', { cities })
  })
})

router.use('/users', require('./users'))
router.use('/cities', require('./cities'))

module.exports = router
