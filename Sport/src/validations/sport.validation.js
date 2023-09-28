const Joi = require("joi");

/** Create Sport Validation */
const createSport = {
  body: Joi.object().keys({
    sport_name: Joi.string().trim().required(),
    sport_category: Joi.string().trim().required(),
  }),
};

module.exports = {
  createSport
};
