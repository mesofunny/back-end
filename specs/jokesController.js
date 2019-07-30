/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

const user1 = {
  firstname: 'Noble',
  lastname: 'Bossy',
  email: 'bossy@gmail.com',
  photo: 'love.png',
  password: '1234567'
};

const newJoke = {
  title: 'Sings',
  joke: 'A singer is someone that sing sings',
  status: 'no'
};

let token = null;

it('Signup to get token', done => {
  chai
    .request(server)
    .post('/api/v1/users/register')
    .send(user1)
    .end((err, res) => {
      res.should.have.status(201);
      token = res.body.token;
      done(err);
    });
});

describe('Jokes Endpoints', () => {
  it('it should return an array of jokes', done => {
    chai
      .request(server)
      .get('/api/v1/jokes')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.jokes.should.to.be.a('array');
        done(err);
      });
  });
  it('it should return an object', done => {
    chai
      .request(server)
      .get('/api/v1/jokesOfTheDay')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.joke.should.to.be.a('object');
        done(err);
      });
  });
  it('it should return search results', done => {
    chai
      .request(server)
      .get('/api/v1/search?text=Moon')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.jokes.should.to.be.a('array');
        done(err);
      });
  });

  it('Add new joke', done => {
    chai
      .request(server)
      .post('/api/v1/users/jokes')
      .send(newJoke)
      .set('authorization', token)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.jokes.should.to.be.a('array');
        done(err);
      });
  });
  it('Get user joke', done => {
    chai
      .request(server)
      .get('/api/v1/users/jokes')
      .set('authorization', token)
      .end((err, res) => {
        res.should.have.status(404);
        done(err);
      });
  });
});
