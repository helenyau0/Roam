const router = require('express').Router()
const cities = require('./cities')
const dbCities = require('../../models/cities')

router.get('/:id', (req, res, next) => {
  dbCities.getOne(req.params.id)
  .then(city => {
    dbCities.getPost(req.params.id)
    .then(posts => {
      res.render('city', {city, posts})
    }).catch(next)
  }).catch(next)
})

module.exports = router
