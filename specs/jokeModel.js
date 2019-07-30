/* eslint-disable no-undef */
const chai = require('chai');
const Models = require('../models/jokesModel');

chai.should();

const newJoke = {
  title: 'Sings',
  joke: 'A singer is someone that sing sings',
  private: 'no'
};

describe('Joke models', () => {
  it('Adds new jokes', async () => {
    const jokes = await Models.post(newJoke);
    jokes.should.be.a('array');
  });
  it('Gets all jokes', async () => {
    const allJokes = await Models.findAll();
    allJokes.should.be.a('array');
  });
  it('Search jokes', async () => {
    const searchResults = await Models.search('Moon');
    searchResults.should.be.a('array');
  });
  it('find jokes by id', async () => {
    const jokesById = await Models.findById(1);
    jokesById.title.should.equal('Dreams');
  });
  it('find user jokes', async () => {
    const userJokes = await Models.getUserJoke(1);
    userJokes.should.be.a('array');
  });
  it('remove joke by id', async () => {
    const remove = await Models.remove(1, 17);
    remove.should.equal(1);
    const remove2 = await Models.remove(1, 16);
    remove2.should.equal('unable to delete');
  });
  it('update a user joke', async () => {
    const updateJoke = await Models.update(2, 18, newJoke);
    updateJoke.title.should.equal('Sings');
    const updateJoke2 = await Models.update(2, 10, newJoke);
    updateJoke2.should.equal('unable to update');
  });
});
