const Joi = require("joi");

/** Create Event Validation */
const createEvent = {
  body: Joi.object().keys({
    event_name: Joi.string().trim().required(),
    event_des: Joi.string().trim().required(),
    event_data: Joi.date().required(),
    location: Joi.string().trim().required,
    team: Joi.string().trim().required(),
    player: Joi.string().trim().required(),
  }),
};
module.exports = {
  createEvent,
};
