const { Coach } = require("../models");

/** Create Coach service */
const createCoach = async (reqBody) => {
  return Coach.create(reqBody);
};

/** Get Coach list service */
const getCoachList = async () => {
  return Coach.find();
};

/** Get Coach by Id service */
const getCoachById = async (coachId) => {
  return Coach.findById(coachId);
};

/** Coach detials update by Id service */
const updateCoach = async (coachId, updateBody) => {
  return Coach.findByIdAndUpdate(coachId, { $set: updateBody });
};

/** Delete Coach service */
const deleteCoach = async (coachId) => {
  return Coach.findByIdAndDelete(coachId);
};

module.exports = {
  createCoach,
  getCoachList,
  getCoachById,
  updateCoach,
  deleteCoach,
};
