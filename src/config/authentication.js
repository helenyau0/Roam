const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const dbUsers = require('../models/users');

const encryptPassword = password => bcrypt.hashSync(password, 10);

passport.use(
  new LocalStrategy((email, password, done) => {
    dbUsers
      .findByEmail(email)
      .then(foundUser => {
        if (bcrypt.compareSync(password, foundUser.password)) {
          return done(null, foundUser);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      })
      .catch(noUserFound => {
        return done(null, false, { message: 'Invalid email' });
      });
  })
);

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      if (password.length < 8) {
        return done(null, false, {
          message:
            'Password must be longer than 8 and contain at least: 1 capital letter, 1 lowercase letter, and 1 number'
        });
      }
      if (password !== req.body.confirm) {
        return done(null, false, {
          message: 'Passwords do not match, try again.'
        });
      } else {
        dbUsers.findByEmail(email).then(user => {
          if (user) {
            return done(null, false, {
              message: 'This email is already taken.'
            });
          } else if (user === null) {
            const hash = encryptPassword(password);
            dbUsers.create(req.body, hash).then(user => {
              return done(null, user);
            });
          }
        });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  dbUsers.findById(id).then(user => done(null, user));
});

module.exports = {
  encryptPassword,
  passport
};
