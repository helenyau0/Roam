const router = require('express').Router()
const users = require('../../models/users')
const posts = require('../../models/posts')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', users.passport.authenticate('local'),
(req, res) => {
  res.redirect(`/users/${req.user.id}`)
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res, next) => {
  const hashed = users.encryptPassword(req.body.password)
  if (req.body.password !== req.body.confirm) {
    res.render('signup', {error: "Password does not match!"})
  } else {
    users.findByEmail(req.body.email)
    .then(user => {
      console.log('user =>', user)
      if(user !== null) {
        res.render('signup', {error: "Email Taken!"})
      } else if(user === null) {
        users.create(req.body, hashed)
        res.redirect('/users/login')
      }
    })
    .catch(next)
  }
})


router.post('/photos', (req, res, next) => {
  const profile_pic = req.body.content

  users.updatePhoto(req.user.id, profile_pic)
  .then(() => {
    res.redirect(`/users/${req.user.id}`)
  })
  .catch(next)
})
router.use((req, res, next) => {
  if(!req.user) {
    res.redirect('/users/login')
  } else {
    next()
  }
})

router.get('/:id', (req, res, next) => {
  if(isNaN(req.params.id)) next()
  users.findById(req.params.id)
  .then(user => {
    posts.findByUserId(user.id)
    .then((posts) => {
      res.render('profile', {user, posts})
    }).catch(next)
  }).catch(next)
})

router.post('/:id', (req, res, next) => {
  if(isNaN(req.params.id)) next()
  users.update(req.params.id, req.body)
  .then((user) => {
    res.redirect(`/users/${user.id}`)
  }).catch(next)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
