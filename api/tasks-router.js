const express = require('express');

const Tasks = require('../data/helpers/task-model');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get tasks', err });
    });
});

router.post('/', (req, res) => {
  const taskData = req.body;
  Tasks.addTask(taskData)
    .then((ids) => {
      res.status(201).json({ created: ids[0] });
    })
    .catch((err) => {
      res.status(500).json('Failed to create new task', err);
    });
});

module.exports = router;
