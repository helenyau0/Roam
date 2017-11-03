const router = require('express').Router()
const cities = require('../../models/cities')
const posts = require('../../models/posts')

router.get('/:name', (req, res, next) => {
  const pages = parseInt(req.query.pages) || 1
  cities.findByName(req.params.name)
  .then(city => {
    posts.findByCityId(city.id, pages)
    .then(posts => {
      res.render('city', {city, posts, pages})
    }).catch(next)
  }).catch(next)
})

router.post('/:cityId/posts', (req, res, next) => {
  posts.create(req.body.cityId, req.user.id, req.body)
  .then(post => {
    res.redirect(`/posts/${post.id}`)
  }).catch(next)
})

router.post('/', (req, res, next) => {
  const body = req.body
  cities.findByName(body.name)
  .then(city => {
    if (city === null) {
      cities.create(body)
      .then(city => {
        res.redirect(`/cities/${city.name}`)
      })
    } else {
      const error = 'City already exit, choose another city!'
      res.redirect(`/?error=${error}`)
    }
  })
  // .then(city => {
  //     console.log('IN', city)
  //   if (city.name !== null) {
  //     cities.getAll() 
  //     .then( cities => {
  //       
  //     })
  //   } else {
  //     cities.create(body)
  //     .then(() => {
  //       res.redirect('/')
  //     }).catch(next)
  //   }
  //})
})


module.exports = router
