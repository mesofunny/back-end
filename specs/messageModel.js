/* eslint-disable no-undef */
const chai = require('chai');
const Models = require('../models/messageModel');

chai.should();

const newMessage = {
  sender: 1,
  message:
    "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
  receiver: 2
};

describe('Message models', () => {
  it('Adds new message', async () => {
    const message = await Models.post(newMessage);
    message.should.be.a('object');
  });
  it('get all messages', async () => {
    const message = await Models.findAll();
    message.should.be.a('array');
  });
  it('get sent messages by id', async () => {
    const message = await Models.findSent(1);
    message.should.be.a('array');
  });
  it('get received messages by id', async () => {
    const message = await Models.findReceived(2);
    message.should.be.a('array');
  });
});
