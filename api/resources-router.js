const express = require('express');

const Resources = require('../data/helpers/resource-model');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Resources.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get resources', err });
    });
});

router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.addResource(resourceData)
    .then((ids) => {
      res.status(201).json({ created: ids[0] });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to add a resource', err });
    });
});

module.exports = router;
