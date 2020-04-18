exports.seed = function (knex) {
  return knex('resources').insert([
    {
      project_id: 1,
      name: 'Lambda Student',
      description: 'a soon to be hired developer',
    },
    {
      project_id: 1,
      name: 'MacBook Pro #1',
      description: 'an overly expensive laptop computer',
    },
  ]);
};
