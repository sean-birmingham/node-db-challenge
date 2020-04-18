exports.seed = function (knex) {
  return knex('projects').insert([
    {
      project_name: 'Complete Node DB Challenge',
      project_description:
        'Design and build a Data Model and a RESTful API that stores data into a Relational Database',
    },
  ]);
};
