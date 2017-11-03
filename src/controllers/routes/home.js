const router = require('express').Router()
const cities = require('../../models/cities')

router.get('/', (req, res) => {
  cities.getAll()
  .then(cities => {
    const error = req.query.error
    console.log(error)
    res.render('index', { cities, error })
  })
})

module.exports = router
