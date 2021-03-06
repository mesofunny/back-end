/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');

chai.should();

chai.use(chaiHttp);

const user = {
  firstname: 'Noble',
  lastname: 'Bossy',
  email: 'bossynobble@gmail.com',
  photo: 'love.png',
  password: '1234567',
};

// console.log(__dirname + '/fb.jpg');

describe('User endpoints', () => {
  let token = null;
  it('Signup user', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/register')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        token = res.body.token;
        done(err);
      });
  });
  it('Login user', (done) => {
    const login = {
      email: 'bossynobble@gmail.com',
      password: '1234567',
    };
    chai
      .request(server)
      .post('/api/v1/users/login')
      .send(login)
      .end((err, res) => {
        res.should.have.status(200);
        token = res.body.token;
        done(err);
      });
  });
  it('Get all users', (done) => {
    chai
      .request(server)
      .get('/api/v1/users')
      .set('authorization', token)
      .end((err, res) => {
        res.body.users.should.be.a('array');
        done(err);
      });
  });
  it('Get a user', (done) => {
    chai
      .request(server)
      .get('/api/v1/user')
      .set('authorization', token)
      .end((err, res) => {
        res.body.user.should.be.a('object');
        done(err);
      });
  });
});

describe('Stretch', () => {
  it('Create users with file upload', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/create')
      .field('Content-Type', 'multipart/form-data')
      .field('firstname', 'Benson')
      .field('lastname', 'Thoms')
      .field('email', 'thompson@gmail.com')
      .field('password', '1234567')
      .attach('photo', `${__dirname}/fb.jpg`)
      .end((err, res) => {
        done(err);
      });
  });
});
