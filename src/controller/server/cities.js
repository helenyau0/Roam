const router = require('express').Router()
const cities = require('./cities')
const dbCities = require('../../models/cities')
const dbPosts = require('../../models/posts')

router.get('/:id', (req, res, next) => {
  console.log('city route id')
  dbCities.getOne(req.params.id)
  .then(city => {
    dbPosts.getByCityId(city.id)
    .then(posts => {
      res.render('city', {city, posts})
    }).catch(next)
  }).catch(next)
})

router.get('/update/:id', (req, res, next) => {
 const id  = req.params.id
  dbPosts.getById(id)
  .then(post => {
    res.render('update_post', {post})
  })
})

router.post('/update/:id', (req, res, next) => {
 const id  = req.params.id
 dbPosts.updatePost(id, req.body)
 .then(post => {
  res.redirect(`/cities/${post.city_id}`)
 })
})

router.post('/delete/:id', (req, res, next) => {
  console.log('it goes ehre throught fetch')
  const id = req.params.id
  dbCities.remove(id)
  .then(deleted => {
    console.log('deleted', deleted)
    res.redirect(`/cities/${deleted.city_id}`)
  })
})

module.exports = router
