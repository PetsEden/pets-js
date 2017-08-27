var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function () {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // TODO
  passport.use(new WeixinStrategy({
    clientID: 'CLIENTID',
    clientSecret: 'CLIENT SECRET',
    callbackURL: 'CALLBACK URL',
    requireState: false,
    scope: 'snsapi_login'
  }, function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  }));

  passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, done) {
    User.findOne({
      'username': username
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: "用户名错误!"
        });
      }
      if (user.password != password) {
        return done(null, false, {
          message: "密码错误!"
        });
      }
      return done(null, user);
    });
  }));
}