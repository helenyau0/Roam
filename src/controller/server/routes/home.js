const router = require('express').Router()
const cities = require('../../../models/cities')
const users = require('../../../models/users')

router.get('/', (req, res) => {
  cities.getAll()
  .then(cities => {
    res.render('index', { cities })
  })
})

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
  if (req.body.password !== req.body.confirm) {
    res.render('signup', {error: "Password does not match!"})
  } else {
    users.findByEmail(req.body.email)
    .then(user => { 
      res.render('signup', {error: "Email Taken!"}) 
    }).catch(() => {
      users.encryptText(req.body.password)
      .then(hashed => {
        console.log(hashed, 'hasheahdsjkfhsfdsfadfhased')
        users.create(req.body, hashed)
        .then(() => {
          res.redirect('/login')
        })
      })
    })
  }
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
