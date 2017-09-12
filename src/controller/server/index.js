const router = require('express').Router()
// const cities = require('./cities')
// const comments = require('./comments')
const users = require('./users')

router.get('/', (req, res) => {
  if(req.user) {
    res.render('index', {name: req.user.name})
  } else {
    res.redirect('/users/login')
  }
})

router.use('/users', users)
// router.use('/comments', comments)
// router.use('/cities', cities)

module.exports = router
