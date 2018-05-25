const router = require('express').Router()
const posts = require('../../models/posts')
const users = require('../../models/users')
const cities = require('../../models/cities')

router.get('/:id', (req, res, next) => {
  posts.findById(req.params.id)
  .then(post => {
    users.findById(post.user_id)
    .then(user => {
      res.render('show', {post, user: user})
    })
  }).catch(next)
})

router.get('/update/:id', (req, res, next) => {
  posts.findById(req.params.id)
  .then(post => {
    res.render('update_post', {post})
  })
})

router.post('/update/:id', (req, res, next) => {
 posts.update(req.params.id, req.body)
 .then(post => {
    cities.findById(post.city_id)
    .then(city => {
      res.redirect(`/cities/${city.name}`)
    })
  })
})

router.post('/delete/:id', (req, res, next) => {  
  const id = req.params.id
  posts.remove(id)
  .then(deleted => {
    res.send('Deleted');
  })
  .catch(err => next(err))
})

module.exports = router
