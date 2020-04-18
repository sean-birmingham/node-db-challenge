const db = require('../db-config');

function getProjects() {
  return db('projects');
}

function addProject(projectData) {
  return db('projects').insert(projectData);
}

module.exports = {
  getProjects,
  addProject,
};
