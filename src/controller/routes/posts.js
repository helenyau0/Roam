const router = require('express').Router()
const posts = require('../../models/posts')

router.get('/:id', (req, res, next) => {
  posts.findById(req.params.id)
  .then(post => {
    res.render('show', {post})
  }).catch(next)
})

router.post('/:id', (req, res, next) => {
  posts.create(req.params.id, req.user.id, req.body)
  .then(post => {
    res.redirect(`/cities/${post.city_id}`)
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
    res.redirect(`/cities/${post.city_id}`)
 })
})

router.post('/delete/:id', (req, res, next) => {
  posts.remove(req.params.id)
  .then(deleted => {
    res.redirect(`/cities/${deleted.city_id}`)
  })
})

module.exports = router