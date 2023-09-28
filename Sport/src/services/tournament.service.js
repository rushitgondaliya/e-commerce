const { Tournament } = require("../models");

/** Create Tournament service */
const createTournament = async (reqBody) => {
  return Tournament.create(reqBody);
};

/** Get Tournament list service */
const getTournamentList = async () => {
  return Tournament.find();
};

/** Get Tournament by Id service */
const getTournamentById = async (tournamentId) => {
  return Tournament.findById(tournamentId);
};

/** Tournament detials update by Id service */
const updateTournament = async (tournamentId, updateBody) => {
  return Tournament.findByIdAndUpdate(tournamentId, { $set: updateBody });
};

/** Delete Tournament service */
const deleteTournament = async (tournamentId) => {
  return Tournament.findByIdAndDelete(tournamentId);
};

module.exports = {
  createTournament,
  getTournamentList,
  getTournamentById,
  updateTournament,
  deleteTournament,
};
