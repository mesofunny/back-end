/* eslint-disable camelcase */
const Models = require('../models/messageModel');
const { errorResponse } = require('../helpers');

class Messages {
  static async postMessage(req, res) {
    try {
      req.body.sender = req.id;
      const newMessage = await Models.post(req.body);
      return res.status(201).json({ newMessage });
    } catch (error) {
      console.log(error);
      return errorResponse(res, error);
    }
  }

  static async getAllMessages(req, res) {
    try {
      const messages = await Models.findAll();
      if (!messages.length) {
        return res.status(404).json({ message: 'No message' });
      }
      return res.status(200).json({ messages });
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  static async getReceivedMessages(req, res) {
      const receiver = req.id;
      console.log(receiver)
    try {
      const messages = await Models.findReceived(receiver);
      if (!messages.length) {
        return res.status(404).json({ message: 'No message' });
      }
      return res.status(200).json({ messages });
    } catch (error) {
      return errorResponse(res, error);
    }
  }

  static async getSentMessages(req, res) {
    const sender = req.id;
    try {
      const messages = await Models.findSent(sender);
      if (!messages.length) {
        return res.status(404).json({ message: 'No message' });
      }
      return res.status(200).json({ messages });
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}

module.exports = Messages;
