const TaskController = require("../controllers/TaskController");

const express = require("express");
const router = express.Router();

router.post("/", TaskController.create);
router.get("/", TaskController.getAll);
router.get("/id/:id", TaskController.getById);
router.put("/id/:id", TaskController.completed);

module.exports = router;
