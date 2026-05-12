const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

router
  .post("/", createTask)
  .get("/", getAllTasks)
  .get("/:id", getTaskById)
  .put("/:id", updateTask)
  .delete("/:id", deleteTask);

module.exports = router;