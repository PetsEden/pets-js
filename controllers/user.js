var User = require('../models/user');
var errorcode = require('./errorcode');
var passport = require('passport');

var signIn = function (req, res) {
  passport.authenticate('local.signin', function (err, user) {
    if (!err) {
      res.json({
        code: errorcode.user_signin_error[0],
        message: errorcode.user_signin_error[1]
      })
      return
    }
    if (!user) {
      res.json({
        code: errorcode.user_signin_incorrect[0],
        message: errorcode.user_signin_incorrect[1]
      })
      return
    }
    res.json({
      code: errorcode.user_signin_ok[0],
      message: errorcode.user_signin_ok[1]
    })
  })(req, res);
}

var signUp = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({
    'username': username
  }, function (err, user) {
    if (err) {
      res.json({
        code: errorcode.user_signup_error[0],
        message: errorcode.user_signup_error[1]
      });
      return;
    }
    if (user) {
      res.json({
        code: errorcode.user_already_exist[0],
        message: errorcode.user_already_exist[1]
      });
      return;
    }
    var newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.save(function (err) {
      if (err) {
        res.json({
          code: errorcode.user_signup_error[0],
          message: errorcode.user_signup_error[1]
        });
        return;
      }
      res.json({
        code: errorcode.user_signup_ok[0],
        message: errorcode.user_signup_ok[1]
      })
    });
  });
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
};