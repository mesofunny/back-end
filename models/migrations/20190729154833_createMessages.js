/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('messages', (messages) => {
    messages.increments();
    messages.text('message').notNullable();
    messages
      .integer('sender')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    messages
      .integer('receiver')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('messages');
};
