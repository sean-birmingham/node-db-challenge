exports.up = function (knex) {
  return knex.schema.table('projects', (tbl) => {
    tbl.renameColumn('name', 'project_name');
    tbl.renameColumn('description', 'project_description');
  });
};

exports.down = function (knex) {
  return knex.schema.table('projects', (tbl) => {
    tbl.renameColumn('project_name', 'name');
    tbl.renameColumn('project_description', 'description');
  });
};
