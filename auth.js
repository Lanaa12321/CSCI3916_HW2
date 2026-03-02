var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
    const expectedUser = process.env.BASIC_USER;
    const expectedPass = process.env.BASIC_PASS;

    if (username === expectedUser && password === expectedPass) {
      return done(null, { name: username });
    } else {
      return done(null, false);
    }
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session: false });