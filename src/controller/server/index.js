const router = require('express').Router()

router.get('/', (req, res) => {res.render('index')})
router.use('/users', require('./users'))
//router.use('/cities', require('./cities'))

module.exports = router
