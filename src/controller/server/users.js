const router = require('express').Router()
const dbUser = require('../../models/users')

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  console.log('getting here');
  console.log('this is the info we get', req.body.name)
  dbUser.create(req.body)
  .then(() => {
    res.redirect('/')
  })
})

module.exports = router
