const router = require('express').Router()
const dbUser = require('../../models/users')

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res, next) => {
  const password = req.body.password
  const confirm = req.body.confirm
  if (password !== confirm) {
    res.render('signup', {error: 'Password does not match!'})
  } else {
    dbUser.find(req.body.email)
    .then(user => {
      if (user) {
        res.render('signup', {error: 'Email is already taken!'})
      } else {
          dbUser.createHashedPasword(password)
          .then(hash => {
            dbUser.create(req.body, hash)
            .then(() => {
              res.redirect('/')
          }).catch(next)
        }).catch(next)
      }
    }).catch(next)
  }
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
