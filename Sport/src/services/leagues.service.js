const { Leagues } = require("../models");

/** Create Leagues service */
const createLeag = async (reqBody) => {
  return Leagues.create(reqBody);
};

/** Get Leagues list service */
const getLeagList = async () => {
  return Leagues.find();
};

/** Get Leagues by Id service */
const getLeagById = async (leaguesId) => {
  return Leagues.findById(leaguesId);
};

/** Leagues detials update by Id service */
const updateLeag = async (leaguesId, updateBody) => {
  return Leagues.findByIdAndUpdate(leaguesId, { $set: updateBody });
};

/** Delete Leagues service */
const deleteLeag = async (leaguesId) => {
  return User.findByIdAndDelete(leaguesId);
};

module.exports = {
  createLeag,
  getLeagList,
  getLeagById,
  updateLeag,
  deleteLeag,
};
