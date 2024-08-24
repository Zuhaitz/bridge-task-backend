require("dotenv").config();

const dbConnection = require("./config/database");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const runServer = async () => {
  await dbConnection();
  app.listen(PORT, () => console.log(`Server listening to port ${PORT}...`));
};

app.use(express.json());
app.use("/tasks", require("./routes/tasks"));

runServer();
