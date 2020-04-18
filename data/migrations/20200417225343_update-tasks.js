exports.up = function (knex) {
  return knex.schema.table('tasks', (tbl) => {
    tbl.renameColumn('description', 'task_description');
  });
};

exports.down = function (knex) {
  return knex.schema.table('tasks', (tbl) => {
    tbl.renameColumn('task_description', 'description');
  });
};
