const router = require('express').Router()
const cities = require('../../models/cities')

router.get('/', (req, res) => {
  console.log('getting to home');
  cities.getAll()
  .then(cities => {
    res.render('index', { cities })
  })
})

module.exports = router
