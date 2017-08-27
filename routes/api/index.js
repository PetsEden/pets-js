var express = require('express');
var router = express.Router();
var userRouter = require('./user');
var petRouter = require('./pet');

router.use(petRouter);
router.use(userRouter);

module.exports = router;