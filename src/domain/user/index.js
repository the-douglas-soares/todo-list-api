const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/users', controller.create)
router.post('/users/login', controller.login)

module.exports = router;