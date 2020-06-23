const express = require("express");
const users = require("../../domain/user");
const tasks = require("../../domain/task");
var router = express.Router();

router.use(users);
router.use(tasks);

module.exports = router;
