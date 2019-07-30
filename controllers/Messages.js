/* eslint-disable camelcase */
const Models = require('../models/messageModel');
const { errorResponse } = require('../helpers');

class Messages {
  static async postMessage() {}

  static async getAllMessages(req, res) {
    try {
      const messages = await Models.findAll();
      return res.status(200).json({ messages });
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}

module.exports = Messages;
