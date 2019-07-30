/* eslint-disable no-undef */
const chai = require('chai');
const Models = require('../models/usersModel');

chai.should();

const user = {
  firstname: 'Rexy',
  lastname: 'Benny',
  email: 'benny@gmail.com',
  password: '1234567'
};

beforeEach(async () => {
  await Models.post(user);
});

describe('Users model', () => {
  it('returns all users', async () => {
    const users = await Models.findAll();
    users.should.be.a('array');
  });
  it('add users', async () => {
    const newUser = {
      firstname: 'Rexy',
      lastname: 'Benny',
      email: 'benny1@gmail.com',
      password: '1234567'
    };
    const userDetail = await Models.post(newUser);
    userDetail.firstname.should.equal('Rexy');
  });
  it('find by id', async () => {
    const userId = await Models.findById(1);
    userId.firstname.should.equal('Rexben');
  });
  it('find by email', async () => {
    const userEmail = await Models.findByEmail('benny1@gmail.com');
    userEmail.lastname.should.equal('Benny');
  });
});
