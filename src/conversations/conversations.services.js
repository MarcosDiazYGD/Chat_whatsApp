const handleResponses = require("../utils/handleResponses");
const ConversationControllers = require("../conversations/conversations.controllers");

const getAllConversations = (req, res) => {
  ConversationControllers
    .getAllConversations()
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

const getConversationById = (req, res) => {
  ConversationControllers
    .findConversationById(req.params.id)
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

const postConversation = (req, res) => {
  ConversationControllers
    .createConversation(req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "Conversation created successfully",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        status: 400,
        message: "the Conversation was not created successfully",
        fields: err,
      });
    });
};

const putConversation = (req, res) => {
  ConversationControllers
    .updateConversation(req.params.id, req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "Updated Conversation",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "Error updating Conversation",
        fields: err,
      });
    });
};

const deleteConversation = (req, res) => {
  ConversationControllers
    .deleteConversation(req.params.id)
    .then(() => {
      handleResponses.success({
        res,
        status: 204,
        message: "Conversation deleted",
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        meesage: "Error deleting Conversation",
        fields: err,
      });
    });
};

module.exports = {
  getAllConversations,
  getConversationById,
  postConversation,
  putConversation,
  deleteConversation
}