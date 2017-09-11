const router = require('express').Router()
const dbUser = require('../../models/users')

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  const password = req.body.password
  dbUser.createHashedPasword(password)
  .then(hash => {
    dbUser.create(req.body, hash)
    .then(() => {
      res.redirect('/')
    })
  })
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', dbUser.passport.authenticate('local'),
  (req, res) => {
    console.log('it succeeds')
    console.log('it gets the name of the req.user', req.user.name)
    res.redirect('/')
})

module.exports = router
