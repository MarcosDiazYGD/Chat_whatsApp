const Users = require("../models/users.model");

// GET
const findAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};
// GET /:ID
const findUsersById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });

  return data;
};

// POST
const createUsers = async (userObj) => {
  const newUser = {
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: userObj.password,
    profileImage: userObj.profileImage,
  };

  const data = await Users.create(newUser);

  return data;
};

// PUT
const updateUser = async (id, updtUsr) => {
  const data = await Users.update(updtUsr, {
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
  const data = await Users.destroy({
    where: {
      id: id,
    },
  });

  return data;
  // 1 exito
  // 0 error
};

module.exports = {
  findAllUsers,
  findUsersById,
  createUsers,
  updateUser,
  deleteUsers,
};
