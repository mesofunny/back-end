/* eslint-disable func-names */
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
      users.string('firstname', 255).notNullable();
      users.string('lastname', 255).notNullable();
      users
        .string('email', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };