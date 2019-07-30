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
  title: 'Sings_test',
  joke: 'A singer is someone that sing sings',
  status: 'no'
};

it('Signup to get token', done => {
  chai
    .request(server)
    .post('/api/v1/users/register')
    .send(user1)
    .end((err, res) => {
      res.should.have.status(201);
      done(err);
    });
});

describe('Jokes Endpoints', () => {
  let token = null;
  before(() => {
    const user2 = {
      email: 'bossy@gmail.com',
      password: '1234567'
    };
    chai
      .request(server)
      .post('/api/v1/users/login')
      .send(user2)
      .end((err, res) => {
        res.should.have.status(200);
        token = res.body.token;
      });
  });
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
      .set('authorization', token)
      .send(newJoke)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.jokes.should.to.be.an('array');
        done(err);
      });
  });

  it('update joke', done => {
    chai
      .request(server)
      .put('/api/v1/users/jokes/21')
      .set('authorization', token)
      .send(newJoke)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.jokes.should.to.be.an('object');
        done(err);
      });
  });

  it('Get user joke', done => {
    chai
      .request(server)
      .get('/api/v1/users/jokes')
      .set('authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.jokes.should.to.be.an('array');
        done(err);
      });
  });

  it('delete user joke', done => {
    chai
      .request(server)
      .delete('/api/v1/users/jokes/21')
      .set('authorization', token)
      .end((err, res) => {
        res.should.have.status(204);
        done(err);
      });
  });

  it('Return invalid token', done => {
    chai
      .request(server)
      .get('/api/v1/users/jokes')
      .set('authorization', 'hx 893ururbr7tyrhuncf gf')
      .end((err, res) => {
        res.should.have.status(401);
        res.body.message.should.equal(
          'Unable to verify token, Pls provide a valid token'
        );
        done(err);
      });
  });
  it('add joke validator', done => {
    const joke = {
      title: 'Lovers'
    };
    chai
      .request(server)
      .post('/api/v1/users/jokes')
      .set('authorization', token)
      .send(joke)
      .end((err, res) => {
        res.should.have.status(400);
        done(err);
      });
  });
});
