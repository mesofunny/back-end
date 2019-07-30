/* eslint-disable no-undef */
const chai = require('chai');
const { hashPassword, comparePassword, createToken } = require('../helpers');

chai.should();

describe('Helper functions', () => {
  let hashed = null;
  it('hashpassword func', async () => {
    const hash = hashPassword('12345678');
    hash.should.be.a('string');
    hashed = hash;
  });
  it('compare password func', async () => {
    const result = comparePassword('12345678', hashed);
    result.should.equal(true);
    const result2 = comparePassword('1234567', hashed);
    result2.should.equal(false);
  });
  it('generate a token', async () => {
    const user = {
      id: 1,
      firstname: 'Ben',
    };
    const token = await createToken(user);
    token.should.be.a('string');
  });
});