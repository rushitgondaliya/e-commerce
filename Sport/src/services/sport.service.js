const { Sport } = require("../models");

/** Create Sport service */
const createSport = async (reqBody) => {
  return Sport.create(reqBody);
};

/** Get Sport list service */
const getSportList = async () => {
  return Sport.find();
};

/** Get Sport by Id service */
const getSportById = async (sportId) => {
  return Sport.findById(sportId);
};

/** Sport detials update by Id service */
const updateSport = async (sportId, updateBody) => {
  return Sport.findByIdAndUpdate(sportId, { $set: updateBody });
};

/** Delete Sport service */
const deleteSport = async (sportId) => {
  return Sport.findByIdAndDelete(sportId);
};

module.exports = {
  createSport,
  getSportList,
  getSportById,
  updateSport,
  deleteSport,
};
