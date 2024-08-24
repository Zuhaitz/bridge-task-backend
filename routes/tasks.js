const TaskController = require("../controllers/TaskController");

const express = require("express");
const router = express.Router();

router.post("/", TaskController.create);

module.exports = router;
