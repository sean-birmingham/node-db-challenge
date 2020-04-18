exports.up = function (knex) {
  return knex.schema.createTable('resources', (tbl) => {
    tbl.increments();
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('name', 128).notNullable();
    tbl.text('description');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resources');
};
