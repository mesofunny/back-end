/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('jokes', (jokes) => {
    jokes.increments();
    jokes.string('title', 255).notNullable();
    jokes.text('joke').notNullable();
    jokes.string('private', 255).notNullable();
    jokes
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('jokes');
};
