const router = require('express').Router()
const users = require('../../../models/users')
const posts = require('../../../models/posts')

router.get('/:id', (req, res, next) => {
  users.findById(req.params.id)
  .then(user => {
    posts.findByUserId(user.id)
    .then((posts) => {
      res.render('profile', {user, posts})
    }).catch(next)
  }).catch(next)
})

router.post('/:id', (req, res, next) => {
  users.update(req.params.id, req.body) 
  .then((user) => {
    res.redirect(`/users/${user.id}`)
  }).catch(next)
})

module.exports = router
