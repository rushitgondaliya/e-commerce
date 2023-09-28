const Joi = require("joi");

/** Create Leagues Validation */
const createLeag = {
  body: Joi.object().keys({
    leagues_name: Joi.string().trim().required(),
    leagues_time: Joi.date().required(),
    team: Joi.string().trim().required(),
  }),
};

module.exports = {
  createLeag,
};
