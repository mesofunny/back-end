/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable func-names */
const { hashPassword } = require('../../helpers');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          firstname: 'Rexben',
          lastname: 'Benny',
          email: 'benny@gmail.com',
          password: hashPassword('12345678'),
          photo:
            'https://res.cloudinary.com/rexben/image/upload/v1552392878/d2zklubixzzl18dfdfjy.png',
        },
        {
          firstname: 'Shelby',
          lastname: 'Gloria',
          email: 'gloria@gmail.com1',
          password: hashPassword('12345678'),
          photo:
            'https://res.cloudinary.com/rexben/image/upload/v1564475993/sample.jpg',
        },
        {
          firstname: 'Love',
          lastname: 'Paul',
          email: 'paul@gmail.com',
          password: hashPassword('12345678'),
          photo:
            'https://res.cloudinary.com/rexben/image/upload/v1552391019/fk4qlr9gtf6qs73do5hw.jpg',
        },
      ]),);
};
