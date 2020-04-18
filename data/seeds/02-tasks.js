exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      description: 'Self-Study/Essay Questions',
      notes:
        "Demonstrate your understanding of this week's concepts by answering the following free-form questions.",
    },
  ]);
};
