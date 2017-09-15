const router = require('express').Router()
const middlewares = require('./middleware')

router.use('/', require('./routes/home'))
router.use('/', require('./routes/authentication'))
router.use(middlewares.authorized)
router.use('/users', require('./routes/users'))
router.use('/cities', require('./routes/cities'))
router.use('/posts', require('./routes/posts'))

module.exports = router
