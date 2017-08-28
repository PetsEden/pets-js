var express = require('express');
var router = express.Router();
var oauthServer = require('../controllers/oauth-server');

// 用户名密码模式，refreshToken 目前只使用这个
router.all('/token', oauthServer.token);

// localhost:3000/oauth/authorize?response_type=code&client_id=697cc3335aeec05a50b5f93d7de6823b&redirect_uri=http://localhost:3000/oauth/callback&state=pets001 HTTP/1.1
router.get('/authorize', oauthServer.authorize);
router.post('/authorize', oauthServer.authorize);

router.get('/callback', (req, res) => {
  console.log(JSON.stringify(res.header));
  res.end('ok');
});

router.get('/secure', oauthServer.authenticate, (req, res) => {
  res.json({ message: 'Secure data' });
});

module.exports = router;