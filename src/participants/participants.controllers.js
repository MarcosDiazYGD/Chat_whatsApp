const Participants = require("../models/participants.models");

// GET
const findAllParticipants = async () => {
  const data = await Participants.findAll();
  return data;
};
// GET /:ID
const findParticipantsById = async (id) => {
  const data = await Participants.findOne({
    where: {
      id: id,
    },
  });

  return data;
};

// POST
const createParticipants = async (participantObj) => {
  const newUser = {
    firstName: participantObj.firstName,
    lastName: participantObj.lastName,
    email: participantObj.email,
    password: participantObj.password,
    profileImage: participantObj.profileImage,
  };

  const data = await Participants.create(newUser);

  return data;
};

// PUT
const updateUser = async (id, updtUsr) => {
  const data = await Participants.update(updtUsr, {
    where: {
      id: id,
    },
  });
  return data[0];
  // [1] // cantidad
  // [0] // error, id no existe
};

// DELETE
const deleteUsers = async (id) => {
  const data = await Participants.destroy({
    where: {
      id: id,
    },
  });

  return data;
  // 1 exito
  // 0 error
};

module.exports = {
  findAllUsers: findAllParticipants,
  findUsersById: findParticipantsById,
  createUsers: createParticipants,
  updateUser,
  deleteUsers,
};
