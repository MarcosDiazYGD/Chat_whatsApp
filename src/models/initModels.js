const Conversations = require("./conversations.model");
const Users = require("./users.model");
const Messages = require("./messages.model");
const Participants = require("./participants.models");

const initModels = () => {
  
  Users.hasMany(Participants)
  Participants.belongsTo(Users)

  Participants.hasMany(Messages)
  Messages.belongsTo(Participants)

  Conversations.hasMany(Participants)
  Participants.belongsTo(Conversations)
}

module.exports = initModels