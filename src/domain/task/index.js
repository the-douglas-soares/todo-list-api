const express = require("express");
const controller = require("./controller");
const authenticate = require("../../core/middlewares/authenticate");

const router = express.Router();

router.get("/tasks", authenticate, controller.getAll);
router.post("/tasks", authenticate, controller.create);
router.put("/tasks/:id", authenticate, controller.update);
router.delete("/tasks/:id", authenticate, controller.del);

module.exports = router;
