const { Team } = require("../models");

/** Create Team service */
const createTeam = async (reqBody) => {
  return Team.create(reqBody);
};

/** Get Team list service */
const getTeamList = async () => {
  return Team.find();
};

/** Get Team by Id service */
const getTeamById = async (teamId) => {
  return Team.findById(teamId);
};

/** Team detials update by Id service */
const updateTeam = async (teamId, updateBody) => {
  return Team.findByIdAndUpdate(teamId, { $set: updateBody });
};

/** Delete Team service */
const deleteTeam = async (teamId) => {
  return Team.findByIdAndDelete(teamId);
};

module.exports = {
  createTeam,
  getTeamList,
  getTeamById,
  updateTeam,
  deleteTeam,
};
