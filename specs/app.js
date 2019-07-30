/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);



describe('GET /', () => {
  it('it should get homepage', done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });
});

describe('GET /api/v1/jokes', () => {
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
      .get('/api/v1/search?text=rock')
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });
});

