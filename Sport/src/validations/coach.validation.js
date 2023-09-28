const Joi = require("joi");

/** Create Coach Validation */
const createCoach = {
  body: Joi.object().keys({
    coach_name: Joi.string().required().trim(),
    speciality: Joi.string().required().trim(),
  }),
};

module.exports = {
  createCoach,
};
