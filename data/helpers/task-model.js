const db = require('../db-config');

function getTasks() {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select(
      't.id',
      't.project_id',
      't.task_description',
      't.notes',
      't.completed',
      'p.project_name',
      'p.project_description'
    );
}

function addTask(taskData) {
  return db('tasks').insert(taskData);
}

module.exports = {
  getTasks,
  addTask,
};
