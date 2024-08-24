const Task = require("../models/Task");

const TaskController = {
  async create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.status(201).send({ message: "Task created successfully", task });
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Task could not be created" });
    }
  },
};

module.exports = TaskController;
