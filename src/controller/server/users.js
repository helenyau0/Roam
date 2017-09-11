const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hi again')
})


module.exports = router
