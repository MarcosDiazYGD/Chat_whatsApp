const Messages = require("../models/messages.model");

// GET
const findAllMessages = async () => {
  const data = await Messages.findAll();
  return data;
};

const findMessagesById = async (id) => {
  const data = await Messages.findOne({
    where: {
      id: id,
    },
  });

  return data;
};

// POST

const createMessage = async (messageObj) => {
  const newMessage = {
    content: messageObj.content,
    status: messageObj.status,
  };

  const data = await Messages.create(newMessage);

  return data;
};

// PUT

const updateMessage = async (id, updtMsj) => {
  const data = await Messages.update(updtMsj, {
    where: {
      id: id,
    },
  });
  return data[0];
  // [1] // cantidad
  // [0] // error, id no existe
};

// DELETE

const deleteMessage = async (id) => {
  const data = await Messages.destroy({
    where: {
      id: id,
    },
  });

  return data;
  // 1 exito
  // 0 error
};

module.exports = {
  findAllMessages,
  findMessagesById,
  createMessage,
  updateMessage,
  deleteMessage,
};
