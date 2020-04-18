const express = require('express');

const Projects = require('../data/helpers/project-model');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get projects', err });
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then((ids) => {
      res.status(201).json({ created: ids[0] });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to add a project', err });
    });
});

module.exports = router;
