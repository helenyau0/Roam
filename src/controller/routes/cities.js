const router = require('express').Router()
const cities = require('../../models/cities')
const posts = require('../../models/posts')

router.get('/:id', (req, res, next) => {
  console.log('city route id')
  cities.findById(req.params.id)
  .then(city => {
    posts.findByCityId(city.id)
    .then(posts => {
      res.render('city', {city, posts})
    }).catch(next)
  }).catch(next)
})

module.exports = router
