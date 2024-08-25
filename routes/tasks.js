const TaskController = require("../controllers/TaskController");

const express = require("express");
const router = express.Router();

router.post("/", TaskController.create);
router.get("/", TaskController.getAll);
router.get("/id/:id", TaskController.getById);
router.put("/id/:id", TaskController.update);
router.put("/complete/:id", TaskController.completed);
router.delete("/id/:id", TaskController.delete);

module.exports = router;
