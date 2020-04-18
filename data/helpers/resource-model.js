const db = require('../db-config');

function getResources() {
  return db('resources');
}

function addResource(resourceData) {
  return db('resources').insert(resourceData);
}
module.exports = {
  getResources,
  addResource,
};
