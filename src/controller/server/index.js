const router = require('express').Router()
// const cities = require('./cities')
// const comments = require('./comments')
const users = require('./users')

router.get('/', (req, res) => {
  res.send('hi again')
})

router.use('/users', users)
// router.use('/comments', comments)
// router.use('/cities', cities)

module.exports = router
