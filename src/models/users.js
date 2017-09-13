const dbUsers = require('./database/users')
const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const encryptText = (password) => {
  return bcrypt.hash(password, 10)
}

passport.use(new LocalStrategy(
  (email, password, done) => {
    dbUsers.findByEmail(email)
    .then(foundUser => {
      if (bcrypt.compareSync(password, foundUser.password)) {
         return done(null, user)
      } else { 
        return done(null, false) 
      }
    }).catch(noUserFound => {
      return done(null, false)
    })
  })
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  dbUsers.findById(id)
  .then(user => done(null, user))
})

module.exports = {
  findById: dbUsers.findById,
  findByEmail: dbUsers.findByEmail,
  create: dbUsers.create,
  update: dbUsers.update,
  encryptText,
  passport
}
