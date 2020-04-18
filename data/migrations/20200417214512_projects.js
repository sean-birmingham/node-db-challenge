exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.text('description');
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
