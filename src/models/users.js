const user = require('./database/users')
const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const createHashedPasword = (password) => {
  return bcrypt.hash(password, 10)
}

passport.use(new LocalStrategy(
  (email, password, done) => {
    console.log('got in the passport')
    user.find(email)
    .then(user => {
      console.log('getting to the .then in passport');
      if (!user) {
        return done(null, false)
      } else {
        return bcrypt.compare(password, user.password, (err, isValid) => {
          console.log('compared password?');
          if(err) {
            return done(err)
          }
          if(!isValid) {
            return done(null, false)
          }
          return done(null, user)
        })
      }
    })
  }
))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  user.get(id)
  .then(user => done(null, user))
})

module.exports = {
  get: user.get,
  create: user.create,
  find: user.find,
  createHashedPasword,
  passport,
  update: user.update
}
