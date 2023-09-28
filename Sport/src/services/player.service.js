const { Player } = require("../models");

/** Create Player service */
const createPlayer = async (reqBody) => {
  return Player.create(reqBody);
};

/** Get Player list service */
const getPlayerList = async () => {
  return Player.find();
};

/** Get Player by Id service */
const getPlayerById = async (playerId) => {
  return Player.findById(playerId);
};

/** Player detials update by Id service */
const updatePlayer = async (playerId, updateBody) => {
  return Player.findByIdAndUpdate(playerId, { $set: updateBody });
};

/** Delete Player service */
const deletePlayer = async (playerId) => {
  return Player.findByIdAndDelete(playerId);
};

module.exports = {
  createPlayer,
  getPlayerList,
  getPlayerById,
  updatePlayer,
  deletePlayer,
};
