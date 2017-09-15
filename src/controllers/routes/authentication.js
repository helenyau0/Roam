const router = require('express').Router()
const { passport } = require('../../config/authentication')

router.get('/login', (req, res) => {
  res.render('login', {error: req.flash('error')})
})

router.post('/login', 
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
 )

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router