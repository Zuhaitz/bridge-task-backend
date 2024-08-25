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
  async getAll(req, res) {
    try {
      const tasks = await Task.find();
      res.send(tasks);
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Tasks could not be retrieved" });
    }
  },
  async getById(req, res) {
    try {
      const task = await Task.findById(req.params.id);
      res.send(task);
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Could not find task by id" });
    }
  },
  async completed(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { completed: true },
        { new: true }
      );
      res.send(task);
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Could not complete task" });
    }
  },
  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { task: req.body.task },
        { new: true }
      );
      res.send(task);
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Could not update task" });
    }
  },
};

module.exports = TaskController;
