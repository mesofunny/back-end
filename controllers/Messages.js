/* eslint-disable camelcase */
const nodeMailer = require('nodemailer');
const dotenv = require('dotenv');
const Models = require('../models/messageModel');
const { errorResponse } = require('../helpers');

dotenv.config();
class Messages {
  static async postMessage(req, res) {
    try {
      const transporter = nodeMailer.createTransport({
        host: 'smtp.googlemail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.USER_MAIL,
          pass: process.env.PASS_MAIL,
        },
      });
      req.body.sender = req.id;
      const newMessage = await Models.post(req.body);
      if (newMessage && newMessage.constraint === 'messages_receiver_foreign') {
        return res.status(404).json({ message: 'Receiver does not exist' });
      }
      const mailOptions = {
        from: process.env.USER_MAIL,
        to: newMessage.receiver,
        subject: 'New Message from MeSoFunny',
        html: `<div style="background-color:#F2F1EC; padding:2rem; width:50%; font-size: 1.2rem"><h1 style="color:#858477; text-align: center">MeSoFunny</h1>
        <p>Hi, you just got a new message on MesoFunny App</p>
        <p><strong>FROM:<strong> ${newMessage.sender}</p>
        <p style="background-color:white"><i>${newMessage.message}</i></p>
        </div>`,
      };
      const result = await transporter.sendMail(mailOptions);
      return res.status(201).json({ newMessage });
    } catch (error) {
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
