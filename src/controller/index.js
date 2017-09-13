const router = require('express').Router()

router.use('/', require('./routes/home'))
router.use('/users', require('./routes/users'))
router.use('/cities', require('./routes/cities'))
router.use('/posts', require('./routes/posts'))

module.exports = router
