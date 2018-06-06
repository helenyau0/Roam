const router = require('express').Router()
const users = require('../../models/users')
const {encryptPassword} = require('../../config/authentication')
const posts = require('../../models/posts')
const middleware = require('../middlewares')

router.get('/signup', (req, res, next) => {
  res.render('signup')
})

router.post('/signup', (req, res, next) => {
  const {password, confirm, email} = req.body
  const hashed = encryptPassword(password)
  if (password !== confirm) {
    res.render('signup', {error: "Passwords do not match!"})
  } else {
    users.findByEmail(email)
    .then(user => {
      if(user) {
        res.render('signup', {error: "Email is taken!"})
      } else if(user === null) {
        users.create(req.body, hashed)
        res.redirect('/login')
      }
    })
    .catch(next)
  }
})

router.post('/photos', (req, res, next) => {
  const profile_pic = req.body.content
  users.updatePhoto(req.user.id, profile_pic)
  .then(() => {
    res.redirect(`/users/${req.user.name}`)
  })
  .catch(next)
})

router.use(middleware.authorized)

router.get('/:name', (req, res, next) => {
  users.findById(req.user.id)
  .then(user => {
    if (!user) res.render('./common/not_found')
    posts.findByUserId(user.id)
    .then((posts) => {
      res.render('profile', {user, posts})
    }).catch(next)
  }).catch(next)
})

router.post('/:id', (req, res, next) => {
  users.update(req.params.id, req.body)
  .then((user) => {
    res.redirect(`/users/${user.name}`)
  }).catch(next)
})

module.exports = router
