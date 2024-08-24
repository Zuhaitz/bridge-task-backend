const mongoose = require("mongoose");

const TaskScheme = mongoose.Schema({
  task: {
    type: String,
    required: [true, "Please introduce a task text"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskScheme);

module.exports = Task;
