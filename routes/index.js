var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var clientsController =require('../controllers/client')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', userController.createUser);
router.post('/clients', clientsController.createClient);
router.get('/clients', clientsController.getClient);

module.exports = router;
