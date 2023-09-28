const { Event } = require("../models");

/** Create Event service */
const createEvent = async (reqBody) => {
  return Event.create(reqBody);
};

/** Get Event list service */
const getEventList = async () => {
  return Event.find();
};

/** Get Event by Id service */
const getEventById = async (eventId) => {
  return Event.findById(eventId);
};

/** Event detials update by Id service */
const updateEvent = async (eventId, updateBody) => {
  return Event.findByIdAndUpdate(eventId, { $set: updateBody });
};

/** Delete Event service */
const deleteEvent = async (eventId) => {
  return Event.findByIdAndDelete(eventId);
};

module.exports = {
  createEvent,
  getEventList,
  getEventById,
  updateEvent,
  deleteEvent,
};
