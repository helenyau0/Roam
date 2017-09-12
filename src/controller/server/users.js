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
    res.redirect(`/users/${req.user.id}`)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/:id', (req,res) => {
  dbUser.get(req.params.id)
  .then(user => {
    console.log(user)
    res.render('profile', {user})
  })
})

router.post('/update', (req, res) => {

})

module.exports = router
