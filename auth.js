var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

// loads .env (safe even if server.js also loads it)
require('dotenv').config();

passport.use(new BasicStrategy(
  function(username, password, done) {

    const expectedUser = process.env.BASIC_USER;
    const expectedPass = process.env.BASIC_PASS;

    // optional: if env vars missing, fail clearly
    if (!expectedUser || !expectedPass) {
      return done(null, false);
    }

    if (username === expectedUser && password === expectedPass) {
      return done(null, { name: username });
    } else {
      return done(null, false);
    }
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session: false });