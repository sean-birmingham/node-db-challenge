exports.seed = function (knex) {
  return knex('projects').insert([
    {
      name: 'Complete Node DB Challenge',
      description:
        'Design and build a Data Model and a RESTful API that stores data into a Relational Database',
    },
  ]);
};
