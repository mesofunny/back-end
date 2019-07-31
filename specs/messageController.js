/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

const user1 = {
  firstname: 'Noble',
  lastname: 'Bossy',
  email: 'bossy2@gmail.com',
  photo: 'love.png',
  password: '1234567',
};

const newMessage = {
  message:
    "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
  receiver: 2,
};

it('Signup to get token', (done) => {
  chai
    .request(server)
    .post('/api/v1/users/register')
    .send(user1)
    .end((err, res) => {
      res.should.have.status(201);
      done(err);
    });
});

describe('messages Endpoints', () => {
  let token = null;
  before((done) => {
    const user2 = {
      email: 'bossy2@gmail.com',
      password: '1234567',
    };
    chai
      .request(server)
      .post('/api/v1/users/login')
      .send(user2)
      .end((err, res) => {
        res.should.have.status(200);
        token = res.body.token;
        done(err);
      });
  });
  it('it should return an array of messages', (done) => {
    chai
      .request(server)
      .get('/api/v1/users/messages/all')
      .set('authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.messages.should.to.be.a('array');
        done(err);
      });
  });
  it('Add new message', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/messages')
      .set('authorization', token)
      .send(newMessage)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.newMessage.should.to.be.an('object');
        done(err);
      });
  });

  it('Get received message', (done) => {
    chai
      .request(server)
      .get('/api/v1/users/messages/received')
      .set('authorization', token)
      .end((err, res) => {
        res.should.have.status(404);
        done(err);
      });
  });

  it('get sent message', (done) => {
    chai
      .request(server)
      .get('/api/v1/users/messages/sent')
      .set('authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.messages.should.to.be.an('array');
        done(err);
      });
  });
  it('add message validator', (done) => {
    const message = {
      receiver: 'Ken',
    };
    chai
      .request(server)
      .post('/api/v1/users/messages')
      .set('authorization', token)
      .send(message)
      .end((err, res) => {
        res.should.have.status(400);
        done(err);
      });
  });
});
