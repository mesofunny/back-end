const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');

chai.should();

chai.use(chaiHttp);

describe('Validation Middleware', () => {
  it('signupValidator', done => {
    const user = {
      firstname: 'Benson'
    };
    chai
      .request(server)
      .post('/api/v1/users/register')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        done(err);
      });
  });
  it('loginValidator', done => {
    const user = {
      email: 'Benson@gmail.com'
    };
    chai
      .request(server)
      .post('/api/v1/users/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        done(err);
      });
  });
});
