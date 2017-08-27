var express = require('express');
var router = express.Router();
var userController = require('../../controllers/user');

// POST /api/user/signin 登录
router.post('/user/signin', userController.signIn);

// POST /api/user/signup 注册
router.post('/user/signup', userController.signUp);

// POST /api/user/signout 登出
router.post('/user/signout', function (req, res) {
  //userController.signout(req, res);
});

module.exports = router;