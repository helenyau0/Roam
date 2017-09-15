const router = require('express').Router()
const middlewares = require('../middlewares')

router.use('/', require('./home'))
router.use('/', require('./authentication'))
router.use('/users', require('./users'))
router.use(middlewares.authorized)
router.use('/cities', require('./cities'))
router.use('/posts', require('./posts'))

module.exports = router
