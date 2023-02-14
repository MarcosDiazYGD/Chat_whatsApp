const handleResponses = require("../utils/handleResponses");
const messagesController = require("../messages/messages.controllers");

const getAllMessages = (req, res) => {
  messagesController
    .findAllMessages()
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: "the request was successful",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the request not found",
        fields: err,
      });
    });
};

const getMessageById = (req, res) => {
  messagesController
    .getMessageById(req.params.id)
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: "the request was successful",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the request failed",
        fields: err,
      });
    });
};

const postMessage = (req, res) => {
  messagesController
    .createMessage(req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "message created successfully",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        status: 400,
        message: "the message was not created successfully",
        fields: err,
      });
    });
};

const putMessage = (req, res) => {
  messagesController
    .updateMessage(req.params.id, req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "Updated message",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "Error updating message",
        fields: err,
      });
    });
};

const deleteMessage = (req, res) => {
  messagesController
    .deleteMessage(req.params.id)
    .then(() => {
      handleResponses.success({
        res,
        status: 204,
        message: "Message deleted",
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        meesage: "Error deleting message",
        fields: err,
      });
    });
};

module.exports = {
  getAllMessages,
  getMessageById,
  postMessage,
  putMessage,
  deleteMessage
}